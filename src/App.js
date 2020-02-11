import React from "react";

import CreateChart from "./chart";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <p>Example Chart Application</p>
      <CreateChart type="bar" width={300} height={200} />
    </div>
  );
}

export default App;
