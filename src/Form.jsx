import CultureBlock from "./CultureBlock";

import handleSubmit from "./handleSubmit";

const Form = ({ onlyRelevantUnits, unitsArray }) => {
  console.log(onlyRelevantUnits);

  const relevantUnitsId = onlyRelevantUnits.map((unit) => {
    return unit._attributes.id;
  });
  console.log(relevantUnitsId);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    handleSubmit(e, unitsArray, onlyRelevantUnits, relevantUnitsId);
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <button type="submit" className="btn btn-hipster">
        submit
      </button>
      <CultureBlock onlyRelevantUnits={onlyRelevantUnits} />
    </form>
  );
};

export default Form;
