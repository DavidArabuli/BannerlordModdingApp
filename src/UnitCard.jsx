import InputSkill from "./InputSkill";

const UnitCard = ({ unit }) => {
  const { _attributes: { id } = {}, skills: { skill } = {} } = unit;

  return (
    <div className="unitCard">
      <h4 className="unitId">{id}</h4>
      <div className="title"></div>

      <InputSkill unit={unit} />
    </div>
  );
};
export default UnitCard;
