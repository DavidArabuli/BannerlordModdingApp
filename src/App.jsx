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
  const onlyRelevantUnits = unitsArray.filter((unit) => {
    if (
      unit._attributes.occupation === "Soldier" ||
      unit._attributes.occupation === "Mercenary"
    ) {
      if (!unit._attributes.id.includes("militia")) {
        return true;
      }
    }
    return false;
  });

  return (
    <div>
      {/* <RenderNames unitArrayData={unitsArray} /> */}
      <Form onlyRelevantUnits={onlyRelevantUnits} unitsArray={unitsArray} />
    </div>
  );
}

export default App;
