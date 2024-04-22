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
      const skillValue = editedSkill[1];
      return [unitId, skillName, skillValue];
    });
    console.log(normalizedFormData);
    const editedUnitsArray = unitsArray.map((unit) => {
      const arrayFlag = Array.isArray(unit.Equipments.EquipmentRoster)
        ? true
        : false;
      normalizedFormData.forEach((inputData) => {
        // set flag, whether it is array or not

        if (unit._attributes.id != inputData[0]) {
          return;
        }
        // skill logic
        else {
          for (let i = 0; i < unit.skills.skill.length; i++) {
            if (unit.skills.skill[i]._attributes.id == inputData[1]) {
              unit.skills.skill[i]._attributes.value = inputData[2];
            }
          }
          // item logic

          if (arrayFlag) {
            unit.Equipments.EquipmentRoster[0].equipment.forEach(
              (equipment) => {
                if (equipment._attributes.slot === inputData[1]) {
                  if (inputData[2] !== "") {
                    equipment._attributes.id = inputData[2];
                  }
                }
              }
            );
          } else {
            unit.Equipments.EquipmentRoster.equipment.forEach((equipment) => {
              if (equipment._attributes.slot === inputData[1]) {
                if (inputData[2] !== "") {
                  equipment._attributes.id = inputData[2];
                }
              }
            });
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
//             for (
//               let i = 0;
//               i < unit.Equipments.EquipmentRoster[0].equipment.length;
//               i++
//             ) {
//               if (
//                 unit.Equipments.EquipmentRoster[0].equipment[i]._attributes
//                   .slot == inputData[1]
//               ) {
//                 if (inputData[2] == "") {
//                   unit.Equipments.EquipmentRoster[0].equipment[
//                     i
//                   ]._attributes.id =
//                     unit.Equipments.EquipmentRoster[0].equipment[
//                       i
//                     ]._attributes.id;
//                 } else {
//                   unit.Equipments.EquipmentRoster[0].equipment[
//                     i
//                   ]._attributes.id = inputData[2];
//                 }
//               }

//             }
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
