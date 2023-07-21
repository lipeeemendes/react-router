import { useEffect, useState } from "react";
import { TODOS } from "./services/api";
import type { Todo } from "./services/api";

// Função principal App
export default function App() {
  const [todos, setTodos] = useState<Todo[]>();
  // Desestruturação de uma array para o gerencimento do estado da lista
  useEffect(() => {
    const getTodos = async () => {
      const todo = await TODOS();
      setTodos(todo);
    };
    getTodos();
  }, []);
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
