import CultureBlock from "./CultureBlock";

import handleSubmit from "./handleSubmit";

const Form = ({ onlyRelevantUnits, unitsArray }) => {
  const relevantUnitsId = onlyRelevantUnits.map((unit) => {
    return unit._attributes.id;
  });

  const handleSubmitForm = (e) => {
    e.preventDefault();
    handleSubmit(e, unitsArray, onlyRelevantUnits, relevantUnitsId);
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <button type="submit" className="btn btn-hipster">
        submit changes and download XML file
      </button>
      <CultureBlock onlyRelevantUnits={onlyRelevantUnits} />
    </form>
  );
};

export default Form;
