import { useRef, useState, useEffect } from "react";

import ItemInput from "./itemInput";
import { nanoid } from "nanoid";

const InputSkill = ({ unit }) => {
  const { _attributes: { id } = {}, skills: { skill } = {} } = unit;
  // const generateUniqueId = () => {
  //   const seed = "skills_input_seed_value";
  //   return nanoid({ size: 10, seed });
  // };
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
            <div key={index} id={id} className="inputBlock">
              <label>{skill?._attributes?.id} :</label>
              <input
                type="text"
                name={`${skill?._attributes?.id}-${id}-skill`}
                defaultValue={skill?._attributes?.value}
                id={`${skill?._attributes?.id}-${id}-${index}`}
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
