import React, { useState } from "react";

const Form = ({ jsonState, setJsonState }) => {
  const [newValue, setNewValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Search for the NPCCharacter object with id "skolderbrotva_tier_3" in the JSON state.  for testing purposes.
    const updatedJsonState = { ...jsonState };
    const npcCharacters = updatedJsonState.NPCCharacters.NPCCharacter;
    const targetCharacter = npcCharacters.find(
      (character) => character._attributes.id === "skolderbrotva_tier_3"
    );

    // If the target character is found, update its skills
    if (targetCharacter) {
      targetCharacter.skills.skill[0]._attributes.value = newValue;
      setJsonState(updatedJsonState);
    } else {
      console.error("NPCCharacter with id 'skolderbrotva_tier_3' not found.");
    }
  };

  const handleChange = (event) => {
    setNewValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Enter new value for skill:</p>
      <input
        type="number"
        value={newValue}
        onChange={handleChange}
        placeholder="Enter new value"
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default Form;
