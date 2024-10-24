import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="container">
      <div className="add-task">
        <h1>Today</h1>
        <div className="input-box">
          <input type="text" placeholder="e.g. Buy grocories" />
          <button>ADD TASK</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
