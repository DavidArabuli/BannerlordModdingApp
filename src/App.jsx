import { useEffect, useState } from "react";
import xmljs from "xml-js";

import "./App.css";
import RenderNames from "./RenderNames";
import Form from "./Form";

function App() {
  const [xmlData, setXmlData] = useState(null);

  useEffect(() => {
    fetch("/spnpccharacters.xml")
      .then((response) => response.text())
      .then((xmlText) => {
        const jsonString = xmljs.xml2json(xmlText, {
          compact: true,
          spaces: 2,
        });

        const jsonObject = JSON.parse(jsonString);

        const xml = xmljs.js2xml(jsonObject, { compact: true, spaces: 2 });

        setXmlData(xml);
      })
      .catch((error) => {
        console.error("Error fetching XML:", error);
      });
  }, []);

  const handleDownload = () => {
    const blob = new Blob([xmlData], { type: "text/xml" });

    const url = URL.createObjectURL(blob);

    // Create a download link
    const link = document.createElement("a");
    link.href = url;
    link.download = "converted_data.xml";
    link.click();

    // Clean up
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      {xmlData && <button onClick={handleDownload}>Download XML</button>}
      <Form />
    </div>
  );
}

export default App;
