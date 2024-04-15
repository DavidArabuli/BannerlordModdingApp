import { useEffect, useState } from "react";
import xmljs from "xml-js";

function useFetchXML() {
  const [unitsArray, setUnitsArray] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/spnpccharacters.xml")
      .then((response) => response.text())
      .then((xmlText) => {
        const jsonString = xmljs.xml2json(xmlText, {
          compact: true,
          spaces: 2,
        });
        const jsonObject = JSON.parse(jsonString);
        setLoading(false);
        setUnitsArray(jsonObject.NPCCharacters.NPCCharacter);
      })
      .catch((error) => {
        console.error("Error fetching XML:", error);
        setLoading(false);
      });
  }, []);

  if (unitsArray === null) {
    return { unitsArray, loading };
  }

  console.log(unitsArray);
  return { unitsArray, loading };
}

export default useFetchXML;
