import React from "react";
import ReactDOM from "react-dom/client";
import { Portfolio } from "./Portfolio";
import "flowbite";
import "./assets/js/scroll.js";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>
);
