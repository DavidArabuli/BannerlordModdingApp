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

  return (
    <div>
      {cultures.map((culture) => (
        <div key={culture} className={`${culture} culture`}>
          <h5>{culture}</h5>
          {onlyRelevantUnits.map((unit) => {
            if (unit._attributes.culture.includes(culture)) {
              return <UnitCard key={unit._attributes.id} unit={unit} />;
            }
            return null;
          })}
        </div>
      ))}
      {/* <button onClick={toggleExpand}>expand culture block</button> */}
    </div>
  );
};

export default CultureBlock;
