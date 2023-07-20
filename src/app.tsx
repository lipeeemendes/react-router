import { useEffect, useState } from "react";
import { TODOS } from "./services/api";
import type { Todo } from "./services/api";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>();
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
      <pre>{JSON.stringify(todos, null, 2)}</pre>
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
}
