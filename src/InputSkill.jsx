import { useRef, useState, useEffect } from "react";

import ItemInput from "./itemInput";

const InputSkill = ({ unit }) => {
  const { _attributes: { id } = {}, skills: { skill } = {} } = unit;

  const Athletics = skill?.[0];
  const Riding = skill?.[1];
  const OneHanded = skill?.[2];
  const TwoHanded = skill?.[3];
  const Polearm = skill?.[4];
  const Bow = skill?.[5];
  const Crossbow = skill?.[6];
  const Throwing = skill?.[7];

  const skillsArray = [
    Athletics,
    Riding,
    OneHanded,
    TwoHanded,
    Polearm,
    Bow,
    Crossbow,
    Throwing,
  ];

  return (
    <section className="unitCardInputs">
      <div className="skillBox">
        {skillsArray.map((skill, index) => {
          return (
            <div key={index} id={id} className="inputLabel">
              <label>{skill?._attributes?.id} :</label>
              <input
                type="text"
                name={`${skill?._attributes?.id}-${id}-skill`}
                defaultValue={skill?._attributes?.value}
                id={id}
                dataset-id={id}
              />
            </div>
          );
        })}
      </div>
      <ItemInput unit={unit} />
    </section>
  );
};
export default InputSkill;
