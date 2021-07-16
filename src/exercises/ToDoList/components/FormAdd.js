import { useState } from "react";

const FormAdd = ({ onAdd }) => {
  const [value, setValue] = useState("");

  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (value) {
      onAdd(value);
      setValue("");
    }
  };

  return (
    <form className="form-todo" onSubmit={handleAdd}>
      <input
        className="form-todo__input"
        value={value}
        onChange={handleChangeValue}
      />
      <button className="form-todo__btn" type="submit">
        +
      </button>
    </form>
  );
};

FormAdd.defaultValues = {
  onAdd: () => {}
};

export default FormAdd;
