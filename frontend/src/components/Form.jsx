/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";

const Form = ({ postForm, errorState }) => {
  const [form, setForm] = useState({
    name: "",
  });

  const formHandler = e => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSumbit = e => {
    e.preventDefault();
    postForm(form);
    setForm({ todo: '' })
  }
  console.log(form);
  return (
    <>
      <h2>Create a To-Do</h2>
      <form onSubmit={handleSumbit}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={formHandler}
          placeholder="Finish project. . ."
        />
        <button>Add Todo</button>
        {errorState ? errorState.msg : ''}
      </form>
    </>
  );
};

export default Form;
