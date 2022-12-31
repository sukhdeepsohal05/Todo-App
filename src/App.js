import React, { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { ShowTask } from "./components/ShowTask";

export default function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("task-list"))
      ? JSON.parse(localStorage.getItem("task-list"))
      : []
  );
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    localStorage.setItem("task-list", JSON.stringify(todos));
  }, [todos]);

  const updateStatus = (e) => {
    if (e.target.classList.contains("completed")) {
      e.target.classList.remove("completed");
      setIsCompleted(false);
    } else {
      e.target.classList.add("completed");
      setIsCompleted(true);
    }
  };

  return (
    <main>
      <Header />
      <Form
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        updateStatus={updateStatus}
        isCompleted={isCompleted}
        setIsCompleted={setIsCompleted}
      />
      <ShowTask todos={todos} setTodos={setTodos} />
      <div className="suggestionText">Drag and drop to reorder list</div>
    </main>
  );
}
