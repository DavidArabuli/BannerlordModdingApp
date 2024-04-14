import { useEffect, useState } from "react";
import xmljs from "xml-js";

function useFetchXML() {
  const [unitsArray, setUnitsArray] = useState([]);

  useEffect(() => {
    fetch("/spnpccharacters.xml")
      .then((response) => response.text())
      .then((xmlText) => {
        const jsonString = xmljs.xml2json(xmlText, {
          compact: true,
          spaces: 2,
        });
        const jsonObject = JSON.parse(jsonString);

        setUnitsArray(jsonObject.NPCCharacters.NPCCharacter);
      })
      .catch((error) => {
        console.error("Error fetching XML:", error);
      });
  }, []);

  // Return the parsed XML data in the form of units array
  return unitsArray;
}

export default useFetchXML;
