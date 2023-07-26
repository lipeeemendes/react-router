import ReactDOM from "react-dom/client";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root, { action } from "./routes/root";
import { loader as loaderRoot } from "./routes/root";
import User from "./routes/user";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: loaderRoot,
    action: action,
    children: [
      {
        path: "users/:usersId",
        element: <User />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // Renderização dos componentes
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
); // <React.StrictMode> É o componente com correções rigorosas
