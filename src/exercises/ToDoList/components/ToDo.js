const { useState } = require("react");

const ToDo = (props) => {
  const { isCompleted: isCompletedParent, text, onToggleComplete } = props;
  const [isCompleted, setComplete] = useState(isCompletedParent);

  const handleChangeComplete = (e) => {
    const valueCompleted = e.target.checked;
    setComplete(valueCompleted);
    onToggleComplete(valueCompleted);
  };

  return (
    <article className="todo">
      <input
        type="checkbox"
        onChange={handleChangeComplete}
        checked={isCompleted}
      />
      <p className={isCompleted && "todo-completed"}> {text} </p>
    </article>
  );
};
ToDo.defaultProps = {
  onToggleComplete: () => {}
};

export default ToDo;
