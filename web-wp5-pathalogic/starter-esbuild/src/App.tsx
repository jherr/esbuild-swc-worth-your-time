import React from "react";
import ReactDOM from "react-dom";
import { BigComponent } from "./BigComponent";

import "./index.css";

const App = () => (
  <div>
    <BigComponent />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
