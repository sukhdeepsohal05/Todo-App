import React from "react";
import "./Form.css";

export const Form = (props) => {
  const updateTask = (e) => {
    props.setInput(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (props.input.trim() !== "") {
      props.setTodos([
        ...props.todos,
        {
          name: props.input,
          status: props.isCompleted ? "completed" : "pending",
        },
      ]);
    }
    props.setInput("");
    document.querySelector('.inputContainer .checkbox').classList.remove('completed');
  };

  return (
    <form onSubmit={submitForm} className="inputContainer">
      <button
        type="button"
        name=""
        className="checkbox"
        onClick={props.updateStatus}
      >
        <div></div>
      </button>
      <input
        type="text"
        placeholder="Create a new todo..."
        className="taskInput"
        onChange={updateTask}
        value={props.input}
      />
    </form>
  );
};
