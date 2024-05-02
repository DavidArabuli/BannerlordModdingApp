import InputSkill from "./InputSkill";

const UnitCard = ({ unit }) => {
  const { _attributes: { id } = ({} = {}) } = unit;

  return (
    <div className="unitCard">
      <h4 className="unitId">{id}</h4>
      <div className="titleUnderscore"></div>

      <InputSkill unit={unit} />
    </div>
  );
};
export default UnitCard;
