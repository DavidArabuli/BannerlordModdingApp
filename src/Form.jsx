import React, { useState } from "react";
import CultureBlock from "./CultureBlock";
import xmljs from "xml-js";
import handleDownload from "./handleDownload";

const Form = ({ onlyRelevantUnits, unitsArray }) => {
  console.log(onlyRelevantUnits);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const newArray = [...formData.entries()];
    console.log(newArray);
    console.log(unitsArray);

    const normalizedFormData = newArray.map((editedSkill) => {
      const unitId = editedSkill[0].split("-")[1];
      const skillName = editedSkill[0].split("-")[0];
      const flag = editedSkill[0].split("-")[2];
      const skillValue = editedSkill[1];
      return [unitId, skillName, flag, skillValue];
    });
    console.log(normalizedFormData);
    const editedUnitsArray = unitsArray.map((unit) => {
      const arrayFlag = Array.isArray(unit.Equipments.EquipmentRoster)
        ? true
        : false;

      normalizedFormData.forEach((inputData) => {
        if (unit._attributes.id != inputData[0]) {
          return;
        }
        // skill logic
        if (inputData[2] === "skill") {
          for (let i = 0; i < unit.skills.skill.length; i++) {
            if (unit.skills.skill[i]._attributes.id == inputData[1]) {
              unit.skills.skill[i]._attributes.value = inputData[3];
            }
          }
          // item logic
          if (arrayFlag) {
            const possibleSlots = [
              "Item0",
              "Item1",
              "Item2",
              "Item3",
              "Body",
              "Leg",
              "Gloves",
              "Cape",
              "Head",
            ];
            const allSkills = [
              "Athletics",
              "Riding",
              "OneHanded",
              "TwoHanded",
              "Polearm",
              "Bow",
              "Crossbow",
              "Throwing",
            ];
            if (
              !possibleSlots.includes(inputData[1]) &&
              !allSkills.includes(inputData[1])
            ) {
              const newEquipment = {
                _attributes: {
                  slot: inputData[1],
                  id: inputData[2],
                },
              };
              unit.Equipments.EquipmentRoster[0].equipment.push(newEquipment);
            } else {
              // Update existing equipment object
              const equipment =
                unit.Equipments.EquipmentRoster[0].equipment.find(
                  (equipment) => equipment._attributes.slot === inputData[1]
                );
              if (equipment && inputData[2] !== "") {
                equipment._attributes.id = inputData[2];
              }
            }
          } else {
            const equipment = unit.Equipments.EquipmentRoster.equipment.find(
              (equipment) => equipment._attributes.slot === inputData[1]
            );
            if (equipment && inputData[2] !== "") {
              equipment._attributes.id = inputData[2];
            }
          }
        }
      });
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
    handleDownload(xml);
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">submit</button>
      <CultureBlock onlyRelevantUnits={onlyRelevantUnits} />
    </form>
  );
};

export default Form;
// import React, { useState } from "react";
// import CultureBlock from "./CultureBlock";
// import xmljs from "xml-js";
// import handleDownload from "./handleDownload";

// const Form = ({ onlyRelevantUnits, unitsArray }) => {
//   console.log(onlyRelevantUnits);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);

//     const newArray = [...formData.entries()];
//     console.log(newArray);
//     console.log(unitsArray);

//     const normalizedFormData = newArray.map((editedSkill) => {
//       const unitId = editedSkill[0].split("-")[1];
//       const skillName = editedSkill[0].split("-")[0];
//       const skillValue = editedSkill[1];
//       return [unitId, skillName, skillValue];
//     });
//     console.log(normalizedFormData);
//     const editedUnitsArray = unitsArray.map((unit) => {
//       const arrayFlag = Array.isArray(unit.Equipments.EquipmentRoster)
//         ? true
//         : false;
//       normalizedFormData.forEach((inputData) => {
//         // set flag, whether it is array or not

//         if (unit._attributes.id != inputData[0]) {
//           return;
//         }
//         // skill logic
//         else {
//           for (let i = 0; i < unit.skills.skill.length; i++) {
//             if (unit.skills.skill[i]._attributes.id == inputData[1]) {
//               unit.skills.skill[i]._attributes.value = inputData[2];
//             }
//           }
//           // item logic

//           if (arrayFlag) {
//             const possibleSlots = [
//               Item0,
//               Item1,
//               Item2,
//               Item3,
//               Body,
//               Leg,
//               Gloves,
//               Cape,
//               Head,
//             ];
//             unit.Equipments.EquipmentRoster[0].equipment.forEach(
//               (equipment) => {
//                 if (equipment._attributes.slot === inputData[1]) {
//                   if (inputData[2] !== "") {
//                     equipment._attributes.id = inputData[2];
//                   }
//                 }
//               }
//             );
//           } else {
//             unit.Equipments.EquipmentRoster.equipment.forEach((equipment) => {
//               if (equipment._attributes.slot === inputData[1]) {
//                 if (inputData[2] !== "") {
//                   equipment._attributes.id = inputData[2];
//                 }
//               }
//             });
//           }
//         }
//       });
//       return unit;
//     });
//     console.log(editedUnitsArray);
//     const xmlData = {
//       NPCCharacters: {
//         NPCCharacter: editedUnitsArray,
//       },
//     };
//     const xml = xmljs.js2xml(xmlData, { compact: true, spaces: 2 });
//     console.log(xml);
//     // handleDownload(xml);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <button type="submit">submit</button>
//       <CultureBlock onlyRelevantUnits={onlyRelevantUnits} />
//     </form>
//   );
// };

// export default Form;
