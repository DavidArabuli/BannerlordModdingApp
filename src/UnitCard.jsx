import InputSkill from "./InputSkill";

const UnitCard = ({ unit }) => {
  const { _attributes: { id } = {}, skills: { skill } = {} } = unit;

  return (
    <div className="unitCard">
      <h4>{id}</h4>

      <InputSkill unit={unit} />
    </div>
  );
};
export default UnitCard;
