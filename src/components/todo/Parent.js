import React, { useState } from "react";
import ChildComponent from "./Child";

export default function Parent() {
  const [inputValue, setInputValue] = useState("");
  const [Elements, setElements] = useState([]);
  const [CompletedTask, setCompletedTask] = useState([]);

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setInputValue("");
    setElements([...Elements, inputValue]);
    console.log(Elements);
  };

  const handleDeleteButton = (index) => {
    const copyElements = [...Elements];
    const completedTask = copyElements.splice(index, 1);
    setElements(copyElements);
    setCompletedTask([...CompletedTask, completedTask]);
  };

  const handleUndoTask = (item, index) => {
    setElements([...Elements, item]);
    const copyCompletedTask = [...CompletedTask];
    copyCompletedTask.splice(index, 1);
    setCompletedTask(copyCompletedTask);
  };
  return (
    <div className="__main">
      <div className="__left">
        <div className="__todoInput">
          <input
            type="text"
            className="__inputField"
            value={inputValue}
            onChange={handleOnChange}
          />
          <button type="button" className="__saveButton" onClick={handleSave}>
            Save
          </button>
        </div>

        <div className="__todoItem">
          {Elements.map((item, index) => {
            return (
              <div className="__specificItem">
                <h1 className="__specificText">{item}</h1>
                <button
                  className="__deleteButton"
                  onClick={() => handleDeleteButton(index)}
                >
                  <i className="fa fa-trash"> Done</i>
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="__right">
        <ChildComponent
          CompletedTask={CompletedTask}
          handleUndoTask={handleUndoTask}
        />
      </div>
    </div>
  );
}
