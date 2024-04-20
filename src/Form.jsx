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
      normalizedFormData.forEach((inputData) => {
        if (unit._attributes.id != inputData[0]) {
          return;
        } else {
          for (let i = 0; i < unit.skills.skill.length; i++) {
            if (unit.skills.skill[i]._attributes.id == inputData[1]) {
              unit.skills.skill[i]._attributes.value = inputData[2];
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
    // handleDownload(xml);
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">submit</button>
      <CultureBlock onlyRelevantUnits={onlyRelevantUnits} />
    </form>
  );
};

export default Form;
