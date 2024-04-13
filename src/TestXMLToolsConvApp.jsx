import { useEffect, useState } from "react";
import Form from "./Form";

function TestXMLToolsConvApp() {
  const [xmlData, setXmlData] = useState(null);

  // Function to update the XML data based on the new value
  const updateXmlData = (newValue) => {
    fetch("/spnpccharacters.xml")
      .then((response) => response.text())
      .then((xmlText) => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "text/xml");

        // Find the NPCCharacter element with the id="skolderbrotva_tier_3"
        const npcCharacters = xmlDoc.getElementsByTagName("NPCCharacter");
        let targetNPCCharacter = null;
        for (let i = 0; i < npcCharacters.length; i++) {
          const character = npcCharacters[i];
          if (character.getAttribute("id") === "skolderbrotva_tier_3") {
            targetNPCCharacter = character;
            break;
          }
        }

        // Update the value attribute of the target skill
        if (targetNPCCharacter) {
          const skills = targetNPCCharacter
            .getElementsByTagName("skills")[0]
            .getElementsByTagName("skill");
          let targetSkill = null;
          for (let i = 0; i < skills.length; i++) {
            const skill = skills[i];
            if (skill.getAttribute("id") === "Athletics") {
              targetSkill = skill;
              break;
            }
          }

          if (targetSkill) {
            targetSkill.setAttribute("value", newValue);
          } else {
            console.error(
              "Skill with id 'Athletics' not found within NPCCharacter 'skolderbrotva_tier_3'."
            );
          }
        } else {
          console.error(
            "NPCCharacter with id 'skolderbrotva_tier_3' not found."
          );
        }

        // XML Document back to a string
        const updatedXmlString = new XMLSerializer().serializeToString(xmlDoc);
        console.log(updatedXmlString);

        // Set the updated XML string as the state
        setXmlData(updatedXmlString);
      })
      .catch((error) => {
        console.error("Error fetching XML:", error);
      });
  };

  const handleDownload = () => {
    const blob = new Blob([xmlData], { type: "text/xml" });

    const url = URL.createObjectURL(blob);

    // download link
    const link = document.createElement("a");
    link.href = url;
    link.download = "converted_data.xml";
    link.click();

    // Clean up
    URL.revokeObjectURL(url);
  };

  //   useEffect(() => {

  //   }, []);
  return (
    <>
      <div>
        <Form updateXmlData={updateXmlData} />
        <button onClick={handleDownload}>download</button>
      </div>
    </>
  );
}

export default TestXMLToolsConvApp;
