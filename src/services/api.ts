export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}; // Passando o tipo de informação que o Todo recebe

async function getTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: Todo[] = await response.json();
  return todos;
} // Utilização de uma função asinrona para buscar uma api de todo

export { getTodos };
