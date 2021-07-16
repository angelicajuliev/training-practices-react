import { useState } from "react";
import FormAdd from "./components/FormAdd";
import List from "./components/List";
import Title from "./components/Title";
import "./styles.css";

const ToDoList = () => {
  const [todos, setToDos] = useState([]);

  const getRandomId = () => {
    const msTime = new Date().getTime();
    const consecutive = todos.length;
    const random = Math.random() * (100 - 10) + 10;

    return `todo-id-${random}-${msTime}-${consecutive}`;
  };

  const handleCompleted = (id, isCompleted) => {
    setToDos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, isCompleted } : todo))
    );
  };

  const handleAddToDO = (text) => {
    const id = getRandomId();
    const newToDo = { id, text, isCompleted: false };
    setToDos((todos) => [...todos, newToDo]);
  };

  return (
    <main className="todo-list">
      <Title />
      <FormAdd onAdd={handleAddToDO} />
      <List todos={todos} onCompleteToDo={handleCompleted} />
    </main>
  );
};

export default ToDoList;
