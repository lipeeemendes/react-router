import { useLoaderData } from "react-router-dom";
import { getTodos, type Todo } from "../services/api";

export async function loader() {
  const res = await getTodos();
  return res;
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
    </>
  );
}
