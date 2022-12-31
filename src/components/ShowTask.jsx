import React, { useState } from "react";
import "./ShowTask.css";

import crossIcon from "../images/icon-cross.svg";
import { Options } from "./Options";

export const ShowTask = (props) => {
  const [filter, setFilter] = useState("all");

  const updateStatus = (event) => {
    if (event.target.classList.contains("completed")) {
      event.target.classList.remove("completed");
    } else {
      event.target.classList.add("completed");
    }
    props.setTodos(
      // eslint-disable-next-line
      props.todos.map((todo, index) => {
        if (index === +event.target.id) {
          return {
            ...todo,
            status: todo.status === "completed" ? "pending" : "completed",
          };
        }
        return todo;
      })
    );
  };

  const deleteTask = (id) => {
    document.querySelectorAll(".task").forEach((task, index) => {
      if (index === id) {
        task.style.transition = "transform 0.2s linear";
        task.style.transform = "translate(1000px, 0px)";
        setTimeout(() => {
          props.setTodos(props.todos.filter((todo, index) => index !== id));
          task.style.transition = "none";
          task.style.transform = "translate(0px, 0px)";
        }, 250);
      }
    });
  };
  let len = 0;

  return (
    <React.Fragment>
      <ul className="taskBox">
        {props.todos.length > 0
          ? // eslint-disable-next-line
            props.todos.map((todo, index) => {
              if (todo.status === filter || filter === "all") {
                len = len + 1;
                return (
                  <li className="task" draggable="true" key={index}>
                    <label htmlFor={index}>
                      <button
                        type="button"
                        className={"checkbox " + todo.status}
                        id={index}
                        onClick={updateStatus}
                      >
                        <div></div>
                      </button>
                      <p
                        className={todo.status === "completed" ? "checked" : ""}
                      >
                        {todo.name}
                      </p>
                    </label>
                    <div
                      className="delContainer"
                      onClick={() => {
                        deleteTask(index);
                      }}
                      id={index}
                    >
                      <img src={crossIcon} alt="delete" />
                    </div>
                  </li>
                );
              }
            })
          : ""}
        {len === 0 && (
          <span className="defaultText">You don't have any task here</span>
        )}
      </ul>
      <Options
        todos={props.todos}
        setTodos={props.setTodos}
        setFilter={setFilter}
      />
    </React.Fragment>
  );
};
