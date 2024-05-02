import xmljs from "xml-js";
const handleSubmit = (e, unitsArray, onlyRelevantUnits, relevantUnitsId) => {
  //   e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const newArray = [...formData.entries()];
  console.log(newArray);
  console.log(unitsArray);
  console.log(onlyRelevantUnits);

  // extracting unit`s id, skill\item slot, flag (item\skill) and provided\empty value
  const normalizedFormData = newArray.map((input) => {
    const unitId = input[0].split("-")[1];
    const slot = input[0].split("-")[0];
    const typeFlag = input[0].split("-")[2];
    const value = input[1];
    return [unitId, slot, typeFlag, value];
  });
  console.log(normalizedFormData);
  const editedUnitsArray = unitsArray.map((unit) => {
    if (!relevantUnitsId.includes(unit._attributes.id)) {
      return unit;
    }
    // flag to distinguish between units with one equipment roster units with multiple rosters
    const arrayFlag = Array.isArray(unit.Equipments.EquipmentRoster)
      ? true
      : false;

    const relevantFormData = normalizedFormData.filter(
      (inputData) => unit._attributes.id === inputData[0]
    );

    // ============ skill logic ============

    const relevantSkillFormData = relevantFormData.filter(
      (data) => data[2] === "skill"
    );

    relevantSkillFormData.forEach((inputData) => {
      const skillToUpdate = unit.skills.skill.find(
        (skill) => skill._attributes.id === inputData[1]
      );
      if (skillToUpdate) {
        skillToUpdate._attributes.value = inputData[3];
      }
    });

    // ============ item logic ============

    const relevantItemFormData = relevantFormData.filter(
      (data) => data[2] === "item"
    );

    if (arrayFlag) {
      const equipmentRoster = unit.Equipments.EquipmentRoster;
      for (let i = 0; i < equipmentRoster.length; i++) {
        const equipment = equipmentRoster[i].equipment;
        // to avoid overwriting we are using only a section of input data
        const startIndex = i * 9;
        const endIndex = startIndex + 9;

        const relevantDataForEquipment = relevantItemFormData.slice(
          startIndex,
          endIndex
        );

        //  a set to store the slots that have already been processed and populated
        const processedSlots = new Set();

        const equipmentCopy = [...equipment];
        for (let j = 0; j < equipmentCopy.length; j++) {
          const attributes = equipmentCopy[j]._attributes;
          relevantDataForEquipment.forEach((entry) => {
            if (attributes.slot === entry[1]) {
              attributes.id = entry[3];

              processedSlots.add(entry[1]);
            }
          });
        }

        relevantDataForEquipment.forEach((entry) => {
          if (!processedSlots.has(entry[1]) && entry[3] !== "") {
            let newEquipment = {
              _attributes: {
                slot: entry[1],
                id: entry[3],
              },
            };
            equipment.push(newEquipment);

            processedSlots.add(entry[1]);
          }
        });
      }
    }

    if (!arrayFlag) {
      relevantItemFormData.forEach((inputData) => {
        let equipment = unit.Equipments.EquipmentRoster.equipment.find(
          (equipment) => equipment._attributes.slot === inputData[1]
        );

        if (!equipment) {
          let newEquipment = {
            _attributes: {
              slot: inputData[1],
              id: inputData[3],
            },
          };
          unit.Equipments.EquipmentRoster.equipment.push(newEquipment);
        } else {
          equipment._attributes.id =
            inputData[3] !== "" ? inputData[3] : equipment._attributes.id;
        }
      });
    }

    return unit;
  });

  console.log(editedUnitsArray);
  const xmlData = {
    NPCCharacters: {
      NPCCharacter: editedUnitsArray,
    },
  };
  const xml = xmljs.js2xml(xmlData, { compact: true, spaces: 2 });
  console.log(xml);
  // handleDownload(xml);
};

export default handleSubmit;
