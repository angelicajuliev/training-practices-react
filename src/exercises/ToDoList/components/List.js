import ToDo from "./ToDo";

const List = ({ todos, onCompleteToDo }) => {
  const todosEl = todos.map((todo) => (
    <ToDo
      key={todo.id}
      isCompleted={todo.isCompleted}
      text={todo.text}
      onToggleCompleted={(isCompleted) => {
        onCompleteToDo(todo.id, isCompleted);
      }}
    />
  ));
  return <section className="list">{todosEl}</section>;
};
export default List;
