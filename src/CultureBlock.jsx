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

  return (
    <div>
      {cultures.map((culture) => (
        <div key={culture} className={culture}>
          <h5>{culture}</h5>
          {onlyRelevantUnits.map((unit) => {
            if (unit._attributes.culture.includes(culture)) {
              return <UnitCard key={unit._attributes.id} unit={unit} />;
            }
            return null;
          })}
        </div>
      ))}
    </div>
  );
};

export default CultureBlock;
