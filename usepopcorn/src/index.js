import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import Starelement from "./Starcomp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Starelement maxstar={5} />
    <Starelement
      maxstar={5}
      size={24}
      color="pink"
      message={["TERRIBLE", "BAD", "OKAY", "GOOD", "BEST"]}
    />
  </React.StrictMode>
);
