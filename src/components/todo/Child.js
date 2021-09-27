import React from "react";

export default function Child({ CompletedTask, handleUndoTask }) {
  return (
    <div>
      <h1>You Have Completed</h1>
      {CompletedTask.map((item, index) => {
        return (
          <div key={index}>
            <div className="__specificItem">
              <h1 className="__specificText">
                <span className="__completedTaskText">{item}</span>
              </h1>
              <button
                className="__deleteButton"
                onClick={() => handleUndoTask(item, index)}
              >
                Undo <i className="fa fa-undo"></i>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
