import React from "react";
import ReactDOM from "react-dom";
import { BigComponent } from "./BigComponent";

const App = () => (
  <div>
    <BigComponent />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
