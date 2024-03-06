import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  //prints multiple in console
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
