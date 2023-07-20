export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

async function getTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: Todo[] = await response.json();
  return todos;
}
export { getTodos as TODOS };
