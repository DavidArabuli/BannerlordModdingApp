import UnitCard from "./UnitCard";

const cultures = [
  "empire",
  "sturgia",
  "khuzait",
  "vlandia",
  "aserai",
  "battania",
  "neutral",
];

const CultureBlock = ({ onlyRelevantUnits }) => {
  console.log(onlyRelevantUnits);
  // const toggleExpand = (e) => {
  //   e.preventDefault();
  //   const section = e.target.previousElementSibling;
  //   section.classList.toggle("open");
  // };
  const toggleExpand = (e) => {
    e.preventDefault();
    const cultureBlock = e.target.nextElementSibling;
    console.log(cultureBlock);
    cultureBlock.classList.toggle("open");
  };
  return (
    <div>
      {cultures.map((culture) => (
        <div className="layer">
          <button className="btn" onClick={toggleExpand}>
            See all {culture} units
          </button>
          <div key={culture} className={`${culture} culture`}>
            <h5>{culture}</h5>
            {onlyRelevantUnits.map((unit) => {
              if (unit._attributes.culture.includes(culture)) {
                return <UnitCard key={unit._attributes.id} unit={unit} />;
              }
              return null;
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CultureBlock;
