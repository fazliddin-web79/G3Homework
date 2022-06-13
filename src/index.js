import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import Context from "./context/context";
import "./index.css";
import Root from "./root";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Context>
      <App />
      {/* <Root /> */}
    </Context>
  </React.StrictMode>
);
