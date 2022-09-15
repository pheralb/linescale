import React from "react";
import ReactDOM from "react-dom/client";

// Router =>
import { HashRouter } from "react-router-dom";
import Router from "@/router";

// Global styles =>
import "@/styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <Router />
    </HashRouter>
  </React.StrictMode>
);

postMessage({ payload: "removeLoading" }, "*");
