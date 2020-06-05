import React from "react";
import "./app.css";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskListContextProvider from "./context/TaskListContext";

function App() {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="appWrapper">
          <Header />
          <div className="main">
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
}

export default App;
