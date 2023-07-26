export default function Todo() {
  return (
    <>
      <h2>Title: {todos[0].title}</h2>
      <p>Completed: {todos[0].completed}</p>
    </>
  );
}
