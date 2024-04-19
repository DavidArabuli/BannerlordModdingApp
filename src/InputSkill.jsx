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
          name={`${Athletics?._attributes?.id}-${id}`}
          defaultValue={Athletics?._attributes?.value}
          id={id}
          dataset-id={id}
        />
      </div>
      <div className="inputLabel">
        <label>{Riding?._attributes?.id} :</label>
        <input
          type="text"
          name={`${Riding?._attributes?.id}-${id}`}
          defaultValue={Riding?._attributes?.value}
          id={id}
        />
      </div>
      <div className="inputLabel">
        <label>{OneHanded?._attributes?.id} :</label>
        <input
          type="text"
          name={`${OneHanded?._attributes?.id}-${id}`}
          defaultValue={OneHanded?._attributes?.value}
          id={id}
        />
      </div>
      <div className="inputLabel">
        <label>{TwoHanded?._attributes?.id} :</label>
        <input
          type="text"
          name={`${TwoHanded?._attributes?.id}-${id}`}
          defaultValue={TwoHanded?._attributes?.value}
          id={id}
        />
      </div>
      <div className="inputLabel">
        <label>{Polearm?._attributes?.id} :</label>
        <input
          type="text"
          name={`${Polearm?._attributes?.id}-${id}`}
          defaultValue={Polearm?._attributes?.value}
          id={id}
        />
      </div>
      <div className="inputLabel">
        <label>{Bow?._attributes?.id} :</label>
        <input
          type="text"
          name={`${Bow?._attributes?.id}-${id}`}
          defaultValue={Bow?._attributes?.value}
          id={id}
        />
      </div>
      <div className="inputLabel">
        <label>{Crossbow?._attributes?.id} :</label>
        <input
          type="text"
          name={`${Crossbow?._attributes?.id}-${id}`}
          defaultValue={Crossbow?._attributes?.value}
          id={id}
        />
      </div>
      <div className="inputLabel">
        <label>{Throwing?._attributes?.id} :</label>
        <input
          type="text"
          name={`${Throwing?._attributes?.id}-${id}`}
          defaultValue={Throwing?._attributes?.value}
          id={id}
        />
      </div>
    </div>
  );
};
export default InputSkill;
