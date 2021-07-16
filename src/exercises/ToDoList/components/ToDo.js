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
    <section className="todo">
      <input
        type="checkbox"
        onChange={handleChangeComplete}
        checked={isCompleted}
      />
      <p className="todo-completed"> {text} </p>
    </section>
  );
};
ToDo.defaultProps = {
  onToggleComplete: () => {}
};

export default ToDo;
