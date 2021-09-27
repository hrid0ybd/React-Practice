import React, { useState } from "react";

export default function Child({
  item,
  index,
  handleDelete,
  handleSaveData,
  handleCancelData,
  inputValue,
}) {
  const [isEdit, setIsEdit] = useState(false);
  const [arr, setArr] = useState(item);
  const handleTitle = (e) => {
    const copyElement = { ...arr };
    copyElement.title = e.target.value;
    setArr(copyElement);

    // setArr({ ...arr, title: e.target.value });
  };
  const handleDescription = (e) => {
    const copyElement = { ...arr };
    copyElement.description = e.target.value;
    setArr(copyElement);

    // setArr({ ...arr, description: e.target.value });
  };
  const handleEdit = () => {
    setIsEdit(!isEdit);
  };
  const handleSave = (i) => {
    setIsEdit(!isEdit);
    handleSaveData(arr, i);
  };
  const handleCancel = (i) => {
    setIsEdit(!isEdit);
    handleCancelData(i);
  };
  return (
    <div>
      <div>
        {isEdit ? (
          <div>
            <br />
            <br />
            <label htmlFor="title">
              Title:{" "}
              <input
                onChange={handleTitle}
                name="title"
                defaultValue={item.title}
              />
            </label>

            <br />
            <br />
            <label htmlFor="desc">
              Description:{" "}
              <textarea
                onChange={handleDescription}
                name="description"
                defaultValue={item.description}
              />
            </label>

            <br />
            <br />
          </div>
        ) : (
          <div
            id={`item_id` + index}
            className={`${inputValue == index ? "bgColor" : ""}`}
          >
            <h3>Index: {index} </h3>
            <h3>Title: {item.title}</h3>
            <h3>Description: {item.description}</h3>
          </div>
        )}
      </div>
      {isEdit ? (
        <div>
          <button type="button" onClick={handleDelete}>
            Delete
          </button>{" "}
          <button onClick={() => handleSave(index)}>Save</button>{" "}
          <button onClick={() => handleCancel(index)}>Cancel</button>
        </div>
      ) : (
        <div>
          <button type="button" onClick={handleDelete}>
            Delete
          </button>{" "}
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}{" "}
    </div>
  );
}
