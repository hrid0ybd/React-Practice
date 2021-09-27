import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

export default function ParentComponent() {
  const [isDisable, setIsDisable] = useState(false);
  const [isClickable, setIsClickable] = useState(false);
  const [inputValue, setInputValue] = useState(0);
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleCheckbox = () => {
    setIsDisable(!isDisable);
    setInputValue("");
  };

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  var elements = [];
  if (inputValue) {
    for (let i = 1; i <= inputValue; i++) {
      elements.push(i);
    }
  }
  if (inputValue < 0) {
    alert("Enter Positive Number");
  }

  const handleButton = (index) => {
    setIsClickable(!isClickable);
    setActiveIndex(index);
  };

  return (
    <div>
      <input
        type="number"
        disabled={isDisable}
        value={inputValue}
        onChange={handleInput}
      />
      <input
        type="checkbox"
        id="checkbox"
        name="checkbox"
        onChange={handleCheckbox}
      />
      <br />
      <br />

      {elements.map((item, index) => (
        <div key={index} className="container">
          <div className="left__side">
            <button
              className="button"
              type="button"
              onClick={() => handleButton(index)}
            >
              {item}
            </button>
          </div>

          <div className="right__side">
            {isClickable && (
              <ChildComponent
                item={item}
                index={index}
                activeIndex={activeIndex}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
