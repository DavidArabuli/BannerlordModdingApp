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
  // console.log(onlyRelevantUnits);

  const toggleExpand = (e) => {
    e.preventDefault();
    const cultureBlock = e.target.nextElementSibling;

    cultureBlock.classList.toggle("open");
  };
  return (
    <div>
      {cultures.map((culture, index) => (
        <div key={index} className="layer">
          <button className="btn" onClick={toggleExpand}>
            See {culture} units
          </button>
          <div key={culture} className={`${culture} culture`}>
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
