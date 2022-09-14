import React from "react";
import ReactDOM from "react-dom/client";

// Router =>
import { BrowserRouter } from "react-router-dom";
import Router from "@/router";

// Global styles =>
import "@/styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>
);

postMessage({ payload: "removeLoading" }, "*");
