import React, { useState, Suspense, lazy } from "react";
const Form = lazy(() => import("./Form"));

import useFetchXML from "./useFetchXML";
import "./App.css";
import Footer from "./Footer";

function App() {
  const [show, setShow] = useState(false);
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
      {!show ? (
        <button
          id="loadAppBtn"
          className="btn loadAppBtn"
          onClick={() => setShow(!show)}
        >
          Load app content. It may take some time!
        </button>
      ) : (
        ""
      )}

      {show && (
        <Suspense fallback={<div className="loading"></div>}>
          <Form onlyRelevantUnits={onlyRelevantUnits} unitsArray={unitsArray} />
        </Suspense>
      )}
      <Footer />
    </div>
  );
}

export default App;
