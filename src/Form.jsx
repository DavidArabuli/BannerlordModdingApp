import React, { useState } from "react";

const Form = () => {
  return (
    <form>
      <h5>Unit`s name here</h5>
      <p>Current Athletic skill is ---- Enter new value for skill:</p>
      <input type="number" placeholder="Enter new value" />
      <button type="submit">Update</button>
    </form>
  );
};

export default Form;
