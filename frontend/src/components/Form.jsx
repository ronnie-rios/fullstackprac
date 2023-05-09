/* eslint-disable no-unused-vars */
import { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    todo: "",
  });

  const formHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <h2>Create a To-Do</h2>
      <form>
        <input
          type="text"
          name="todo"
          value={form.todo}
          onChange={formHandler}
          placeholder="Finish project. . ."
        />
      </form>
    </>
  );
};

export default Form;
