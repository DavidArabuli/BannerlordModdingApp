const RenderNames = ({ unitArrayData }) => {
  const allUnitsArray = unitArrayData.map((name) => {
    return name._attributes.id;
  });

  return (
    <div className="allUnits">
      {allUnitsArray.map((item) => {
        return <h6>{item}</h6>;
      })}
    </div>
  );
};

export default RenderNames;
