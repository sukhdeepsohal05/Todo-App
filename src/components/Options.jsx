import React, { useState } from "react";
import "./Options.css";

export const Options = (props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  window.addEventListener('resize',()=>{
    setWindowWidth(window.innerWidth);
  })
  const clrCompleted = () => {
    props.setFilter("all");
    filterAll();
    props.setTodos(props.todos.filter((todo) => todo.status !== "completed"));
  };

  const filterAll = () => {
    document.querySelector("span.active").classList.remove("active");
    document.querySelector("span#all").classList.add("active");
    props.setFilter("all");
  };
  const filterPending = () => {
    document.querySelector("span.active").classList.remove("active");
    document.querySelector("span#pending").classList.add("active");
    props.setFilter("pending");
  };
  const filterCompleted = () => {
    document.querySelector("span.active").classList.remove("active");
    document.querySelector("span#completed").classList.add("active");
    props.setFilter("completed");
  };

  return (
    <>
      <div className="options">
        <div className="totalTasks">{props.todos.length} items left</div>
        <div className="actions">
          {windowWidth >= 555 && (
            <div className="filters">
              <span id="all" onClick={filterAll} className="active">
                All
              </span>
              <span id="pending" onClick={filterPending}>
                Active
              </span>
              <span id="completed" onClick={filterCompleted}>
                Completed
              </span>
            </div>
          )}
          <div className="clrCompleted">
            <span onClick={clrCompleted}>Clear Completed</span>
          </div>
        </div>
      </div>
      {windowWidth <= 555 && (
        <div className="filters">
          <span id="all" onClick={filterAll} className="active">
            All
          </span>
          <span id="pending" onClick={filterPending}>
            Active
          </span>
          <span id="completed" onClick={filterCompleted}>
            Completed
          </span>
        </div>
      )}
    </>
  );
};
