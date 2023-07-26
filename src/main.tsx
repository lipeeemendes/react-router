import ReactDOM from "react-dom/client";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root, { action } from "./routes/root";
import { loader as loaderRoot } from "./routes/root";
import Todo from "./routes/todo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: loaderRoot,
    action: action,
    children: [
      {
        path: "todo/:todoId",
        element: <Todo />,
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
