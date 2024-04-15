import React, { useEffect, useState } from "react";
import RenderNames from "./RenderNames";
import Form from "./Form";
import useFetchXML from "./useFetchXML";
import "./App.css";

function App() {
  const { unitsArray, loading } = useFetchXML();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <RenderNames unitArrayData={unitsArray} />
      <Form unitsArray={unitsArray} />
    </div>
  );
}

export default App;
