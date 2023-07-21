import ReactDOM from "react-dom/client";
import React from "react";
import App from "./app";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // Renderização dos componentes
  <React.StrictMode>
    <App />
  </React.StrictMode>
); // <React.StrictMode> É o componente com correções rigorosas
