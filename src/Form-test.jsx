// form to test different method of working with XML.
import React, { useState } from "react";

const Form = ({ jsonState, setJsonState }) => {
  const [newValue, setNewValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Search for the NPCCharacter object with id "imperial_sergeant_crossbowman" in the JSON state.  for testing purposes.
    const updatedJsonState = { ...jsonState };
    console.log(updatedJsonState);
    const npcCharacters = updatedJsonState.NPCCharacters.NPCCharacter;
    const targetCharacter = npcCharacters.find(
      (character) =>
        character._attributes.id === "imperial_sergeant_crossbowman"
    );

    // If the target character is found, update its skills
    if (targetCharacter) {
      targetCharacter.skills.skill[0]._attributes.value = newValue;
      setJsonState(updatedJsonState);
    } else {
      console.error(
        "NPCCharacter with id 'imperial_sergeant_crossbowman' not found."
      );
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
