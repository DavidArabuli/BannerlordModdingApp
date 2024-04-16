import InputSkill from "./InputSkill";

const UnitCard = ({ unit }) => {
  const { _attributes: { id } = {}, skills: { skill } = {} } = unit;

  return (
    <div>
      <h6>Unit Card</h6>
      <h6>{id}</h6>

      <InputSkill unit={unit} />
    </div>
  );
};
export default UnitCard;
