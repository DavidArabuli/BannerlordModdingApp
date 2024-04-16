import { useRef } from "react";

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

  return (
    <div className="skillBox">
      <div className="inputLabel">
        <label>{Athletics?._attributes?.id} :</label>
        <input
          type="text"
          name="Athletics"
          defaultValue={Athletics?._attributes?.value}
          id={id}
          dataset-id={id}
        />
      </div>
      <div className="inputLabel">
        <label>{Riding?._attributes?.id} :</label>
        <input
          type="text"
          name="Riding"
          defaultValue={Riding?._attributes?.value}
          id={id}
        />
      </div>
      <div className="inputLabel">
        <label>{OneHanded?._attributes?.id} :</label>
        <input
          type="text"
          name="OneHanded"
          defaultValue={OneHanded?._attributes?.value}
          id={id}
        />
      </div>
      <div className="inputLabel">
        <label>{TwoHanded?._attributes?.id} :</label>
        <input
          type="text"
          name="TwoHanded"
          defaultValue={TwoHanded?._attributes?.value}
          id={id}
        />
      </div>
      <div className="inputLabel">
        <label>{Polearm?._attributes?.id} :</label>
        <input
          type="text"
          name="Polearm"
          defaultValue={Polearm?._attributes?.value}
          id={id}
        />
      </div>
      <div className="inputLabel">
        <label>{Bow?._attributes?.id} :</label>
        <input
          type="text"
          name="Bow"
          defaultValue={Bow?._attributes?.value}
          id={id}
        />
      </div>
      <div className="inputLabel">
        <label>{Crossbow?._attributes?.id} :</label>
        <input
          type="text"
          name="Crossbow"
          defaultValue={Crossbow?._attributes?.value}
          id={id}
        />
      </div>
      <div className="inputLabel">
        <label>{Throwing?._attributes?.id} :</label>
        <input
          type="text"
          name="Throwing"
          defaultValue={Throwing?._attributes?.value}
          id={id}
        />
      </div>
    </div>
  );
};
export default InputSkill;
