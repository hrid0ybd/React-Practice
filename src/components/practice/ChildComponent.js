import React from "react";

export default function ChildComponent({ item, index, activeIndex }) {
  return (
    <div>
      <div>{activeIndex === index && <h1>{item}</h1>}</div>
    </div>
  );
}
