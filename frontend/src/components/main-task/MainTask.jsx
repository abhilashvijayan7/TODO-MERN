import React from "react";
import "./MainTask.css";
import edit from "../../assets/icons/edit.png";

function MainTask() {
  return (
    <div className="outer-container">
      <div className="task-container">

        <div className="each-task">
          <div className="todo-container">
            <input type="checkbox" id="todo1" name="todo1" value="Bike" />
            <div className="label-icon">
              <label className="label" for="todo1">
                {" "}
                Do the dishes.
              </label>
              <img src={edit} alt="edit-icon" />
            </div>
          </div>
        </div>

        <div className="each-task">
          <div className="todo-container">
            <input type="checkbox" id="todo2" name="todo2" value="Bike" />

            <div className="label-icon">
              <label for="todo2"> Mouse hover state.</label>
              <img src={edit} alt="edit-icon" />
            </div>
          </div>
        </div>

        <div className="each-task">
          <div className="todo-container">
            <input type="checkbox" id="todo3" name="todo3" value="Bike" />

            <div className="label-icon">
              <label for="todo3"> Walk the do|</label>
              <img src={edit} alt="edit-icon" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default MainTask;
