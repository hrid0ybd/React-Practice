import React from "react";

export default function Child({ CompletedTask }) {
  return (
    <div>
      <h1>You Have Completed</h1>
      {CompletedTask.map((item, index) => {
        return (
          <div key={index}>
            <p className="__completedTask">
              {index + 1} : <span className="__completedTaskText">{item}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
}
