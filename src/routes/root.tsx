import { useLoaderData, Form, ActionFunctionArgs } from "react-router-dom";
import { getTodos, saveTodos, type Todo } from "../services/api";

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
      <h1>App</h1>
      {/* Pegando a lista de todos em JSON e transformando em string, o segudo
       prarmetro pode ser uma função e o terceiro indentação */}
      <pre>{JSON.stringify(todos, null, 2)}</pre>
      <ul>
        {/* Passando por cada item do todo e renderizando o titulo do todo */}
        {todos?.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <Form method="post">
        <input type="text" name="name" placeholder="Task" />
        <button type="submit">New User</button>
      </Form>
    </>
  );
}
