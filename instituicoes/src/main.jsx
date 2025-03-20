import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { InstituicoesProvider } from "./context/InstituicoesContext.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InstituicoesProvider>
      <Router>
        <App />
      </Router>
    </InstituicoesProvider>
  </React.StrictMode>
);
