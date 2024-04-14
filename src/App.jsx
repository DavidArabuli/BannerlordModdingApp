import { useEffect, useState } from "react";
import xmljs from "xml-js";

import "./App.css";
import RenderNames from "./RenderNames";
import Form from "./Form";
import useFetchXML from "./useFetchXML";

function App() {
  const unitArrayData = useFetchXML();

  return (
    <div>
      <RenderNames unitArrayData={unitArrayData} />
      <Form />
    </div>
  );
}

export default App;
