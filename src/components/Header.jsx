import React from "react";
import "./Header.css";

export const Header = () => {
  const changeTheme = () => {
    if (document.body.classList.contains("light")) {
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
    }
  };

  return (
    <header className="header">
      <h1 className="heading">T O D O</h1>
      <div className="themeBtn" onClick={changeTheme}></div>
    </header>
  );
};
