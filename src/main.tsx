import ReactDOM from "react-dom/client";
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useLoaderData,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: loader,
    children: [
      {
        path: "menu/:id",
        element: <Menu />,
        loader: action,
      },
    ],
  },
]);

export default function Home() {
  const data = useLoaderData();
  return (
    <>
      <h1>Hello</h1>
      {JSON.stringify(data)}
      <Outlet />
    </>
  );
}

export function Menu() {
  return <h2>Cardápio</h2>;
}

export async function loader() {
  return {
    name: "felipe",
    age: 19,
  };
}

export async function action() {
  return {
    name: "Arthur",
    age: 15,
  };
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
