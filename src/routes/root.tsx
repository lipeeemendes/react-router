import {
  useLoaderData,
  Form,
  ActionFunctionArgs,
  Outlet,
} from "react-router-dom";
import { getTodos, saveTodos, type Todo } from "../services/api";
import "../styles.css";

export async function loader() {
  const res = await getTodos();
  return res;
}

export async function action({ request }: ActionFunctionArgs) {
  const data = await request.formData();
  console.log(data.get("name"));
  await saveTodos(data.get("name") as string);
  //  const task = await createTask();
  return null;
}

// Função principal App
export default function App() {
  const todos = useLoaderData() as Todo[];
  return (
    <>
      <main className="container">
        <div id="sidebar">
          <ul>
            {todos?.map((todo) => (
              <li key={todo.id}>{todo.title}</li>
            ))}
          </ul>
        </div>
        <div id="details">
          <Outlet />
        </div>
      </main>
    </>
  );
}
