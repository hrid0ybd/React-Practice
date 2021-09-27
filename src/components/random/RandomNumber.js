import React, { useState } from "react";

export default function RandomNumber() {
  const [inputValue, setInputValue] = useState("");
  const [isRandom, setIsRandom] = useState(false);
  const [Elements, setElements] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const handleRandomButton = () => {
    setIsRandom(!isRandom);
    console.log("Clicked");
    setElements(Elements.sort((a, b) => 0.5 - Math.random()));
  };

  const handleSpecificItem = (item) => {
    setInputValue([...inputValue, item].join(""));
  };

  return (
    <div>
      <div>
        <input type="text" defaultValue={inputValue} />
        <button type="button" onClick={handleRandomButton}>
          Random
        </button>
      </div>
      <div>
        {Elements.map((item, index) => {
          return (
            <div key={index}>
              <button type="button" onClick={() => handleSpecificItem(item)}>
                {item}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
