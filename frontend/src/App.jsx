import React from "react";
import Header from "./components/header/Header";
import Status from "./components/task/Status";
import MainTask from "./components/main-task/MainTask";

function App() {
  return (
    <div>
      <Header />

      <div className="group-task-status">
        <Status />
        <MainTask />
      </div>
    </div>
  );
}

export default App;
