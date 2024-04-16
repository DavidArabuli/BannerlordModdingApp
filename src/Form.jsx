import React, { useState } from "react";
import CultureBlock from "./CultureBlock";

const Form = ({ onlyRelevantUnits }) => {
  console.log(onlyRelevantUnits);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const newArray = [...formData.entries()];
    console.log(newArray);
  };
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">submit</button>
      <CultureBlock onlyRelevantUnits={onlyRelevantUnits} />
    </form>
  );
};

export default Form;
