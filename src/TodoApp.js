import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./TodoApp.css";

export default function TodoApp() {
  return (
    <div className="container">
      <div className="inner_container">
        <Header />
        <Main />
      </div>
    </div>
  );
}
