export type Todo = {
  userId: number;
  id: string;
  title: string;
  completed: boolean;
}; // Passando o tipo de informação que o Todo recebe

async function getTodos() {
  //const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  //const todos: Todo[] = await response.json();
  const todos = JSON.parse(localStorage.getItem("todos") as string) || [];
  return todos;
} // Utilização de uma função asinrona para buscar uma api de todo

export async function saveTodos(title: string) {
  const newTodo: Todo = {
    userId: 1,
    id: crypto.randomUUID(),
    title: title,
    completed: false,
  };
  let todos: Todo[] = JSON.parse(localStorage.getItem("todos") as string) || [];
  todos.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

export { getTodos };
