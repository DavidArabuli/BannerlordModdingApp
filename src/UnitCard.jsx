const UnitCard = ({ unit }) => {
  const { _attributes: { id } = {}, skills: { skill } = {} } = unit;
  const athletics = skill?.[0];
  //   console.log(athletics);
  return (
    <div>
      <h6>Unit Card</h6>
      <h6>{id}</h6>
      <label htmlFor="skill">
        current {athletics?._attributes?.id} value:{" "}
        {athletics?._attributes?.value} , enter a new value :
      </label>
      <input type="text" name="skill" id="skill" />
    </div>
  );
};
export default UnitCard;
