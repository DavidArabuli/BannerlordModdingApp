import { useRef, useState, useEffect } from "react";
import weaponsArray from "./itemJsons/weaponsArray.json";

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
  const [weapon, setWeapon] = useState(
    unit.Equipments.EquipmentRoster[0]?.equipment[0]?._attributes?.id
  );
  const weaponstate = Array.isArray(unit.Equipments.EquipmentRoster)
    ? unit.Equipments.EquipmentRoster[0]?.equipment[0]?._attributes?.id
    : unit.Equipments.EquipmentRoster.equipment[0]?._attributes?.id;
  // const [weapon, setWeapon] = useState(
  //   unit.Equipments.EquipmentRoster[0]?.equipment[0]?._attributes?.id
  // );
  const handleWeaponChange = (value) => {
    setWeapon(value);
  };
  const slot = Array.isArray(unit.Equipments.EquipmentRoster)
    ? unit.Equipments.EquipmentRoster[0]?.equipment[0]?._attributes?.slot
    : unit.Equipments.EquipmentRoster.equipment[0]?._attributes?.slot;

  // unit.Equipments.EquipmentRoster[0]?.equipment[0]?._attributes?.slot;

  useEffect(() => {
    const selectElement = document.getElementById(`selector-${id}`);
    if (selectElement) {
      selectElement.value = weapon || "";
    }
  }, [weapon, id]);

  return (
    <div className="skillBox">
      {skillsArray.map((skill, index) => {
        return (
          <div key={index} id={id} className="inputLabel">
            <label>{skill?._attributes?.id} :</label>
            <input
              type="text"
              name={`${skill?._attributes?.id}-${id}`}
              defaultValue={skill?._attributes?.value}
              id={id}
              dataset-id={id}
            />
          </div>
        );
      })}

      <div className="itemBlock">
        <label>Current weapon: {weapon} | Choose a new weapon: </label>
        <select
          value={weapon}
          name={`${slot}-${id}`}
          id={id}
          onChange={(e) => {
            handleWeaponChange(e.target.value);
          }}
        >
          <option value="">Select an option</option>
          {weaponsArray.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default InputSkill;
