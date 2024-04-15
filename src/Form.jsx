import React, { useState } from "react";
import CultureBlock from "./CultureBlock";

const Form = ({ unitsArray }) => {
  console.log(unitsArray);
  return (
    <form>
      <CultureBlock unitsArray={unitsArray} />
    </form>
  );
};

export default Form;
