import ReactDOM from "react-dom/client";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import { loader as loaderRoot } from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: loaderRoot,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // Renderização dos componentes
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
); // <React.StrictMode> É o componente com correções rigorosas
