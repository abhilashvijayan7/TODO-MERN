import React from "react";
import "./Status.css";

function Status() {
  return (
    <div className="status-container">
      <div className="each-status">
        {" "}
        <span  className="status">Remaining</span> <span className="count">1</span>
      </div>
      <div className="each-status">
        {" "}
        <span className="status">Completed</span> <span className="count">1</span>
      </div>
      <div className="each-status">
        {" "}
        <span className="status">Total</span> <span className="count">1</span>
      </div>
    </div>
  );
}

export default Status;
