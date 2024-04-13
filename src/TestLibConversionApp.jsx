import { useEffect, useState } from "react";
import xmljs from "xml-js";
import Form from "./Form";

function TestLibConversionApp() {
  const [jsonState, setJsonState] = useState(null);
  const [xmlData, setXmlData] = useState(null);

  useEffect(() => {
    fetch("/spnpccharacters.xml")
      .then((response) => response.text())
      .then((xmlText) => {
        const jsonObject = xmljs.xml2json(xmlText, {
          compact: true,
          spaces: 2,
        });
        setJsonState(JSON.parse(jsonObject));
      })
      .catch((error) => {
        console.error("Error fetching XML:", error);
      });
  }, []);

  useEffect(() => {
    if (jsonState) {
      // Convert the updated JSON object back to XML
      const xml = xmljs.js2xml(jsonState, { compact: true, spaces: 2 });
      setXmlData(xml);
      console.log(jsonState);
    }
  }, [jsonState]);

  const handleDownload = () => {
    const blob = new Blob([xmlData], { type: "text/xml" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "converted_data.xml";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      {xmlData && <button onClick={handleDownload}>Download XML</button>}
      <Form jsonState={jsonState} setJsonState={setJsonState} />
    </div>
  );
}

export default TestLibConversionApp;
