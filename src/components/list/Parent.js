/* eslint-disable no-self-assign */
import React, { useState, useEffect } from "react";
import ChildModule from "./Child";

export default function Parent() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([
    {
      id: "1",
      title: "ABCD",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
      id: "2",
      title: "EFGH",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      id: "3",
      title: "IJKL",
      description: "It has survived not only five centuries",
    },
    {
      id: "4",
      title: "MNOP",
      description:
        "It was popularised in the 1960s with the release of Letraset sheets",
    },
    {
      id: "5",
      title: "QRST",
      description: "Lorem Ipsum is not simply random text.",
    },
    {
      id: "6",
      title: "QRST",
      description: "Lorem Ipsum is not simply random text.",
    },
    {
      id: "7",
      title: "QRST",
      description: "Lorem Ipsum is not simply random text.",
    },
    {
      id: "8",
      title: "QRST",
      description: "Lorem Ipsum is not simply random text.",
    },
    {
      id: "9",
      title: "QRST",
      description: "Lorem Ipsum is not simply random text.",
    },
    {
      id: "10",
      title: "QRST",
      description: "Lorem Ipsum is not simply random text.",
    },
    {
      id: "11",
      title: "QRST",
      description: "Lorem Ipsum is not simply random text.",
    },
    {
      id: "12",
      title: "QRST",
      description: "Lorem Ipsum is not simply random text.",
    },
    {
      id: "13",
      title: "QRST",
      description: "Lorem Ipsum is not simply random text.",
    },
    {
      id: "14",
      title: "QRST",
      description: "Lorem Ipsum is not simply random text.",
    },
    {
      id: "15",
      title: "QRST",
      description: "Lorem Ipsum is not simply random text.",
    },
    {
      id: "16",
      title: "QRST",
      description: "Lorem Ipsum is not simply random text.",
    },
    {
      id: "17",
      title: "QRST",
      description: "Lorem Ipsum is not simply random text.",
    },
    {
      id: "18",
      title: "QRST",
      description: "Lorem Ipsum is not simply random text.",
    },
    {
      id: "19",
      title: "QRST",
      description: "Lorem Ipsum is not simply random text.",
    },
    {
      id: "20",
      title: "QRST",
      description: "Lorem Ipsum is not simply random text.",
    },
    {
      id: "21",
      title: "QRST",
      description: "Lorem Ipsum is not simply random text.",
    },
    {
      id: "22",
      title: "QRST",
      description: "Lorem Ipsum is not simply random text.",
    },
    {
      id: "23",
      title: "QRST",
      description: "Lorem Ipsum is not simply random text.",
    },
    {
      id: "24",
      title: "QRST",
      description: "Lorem Ipsum is not simply random text.",
    },
    {
      id: "25",
      title: "QRST",
      description: "Lorem Ipsum is not simply random text.",
    },
    {
      id: "26",
      title: "QRST",
      description: "Lorem Ipsum is not simply random text.",
    },
    {
      id: "27",
      title: "QRST",
      description: "Lorem Ipsum is not simply random text.",
    },
    {
      id: "28",
      title: "QRST",
      description: "Lorem Ipsum is not simply random text.",
    },
    {
      id: "29",
      title: "QRST",
      description: "Lorem Ipsum is not simply random text.",
    },
    {
      id: "30",
      title: "QRST",
      description: "Lorem Ipsum is not simply random text.",
    },
    {
      id: "31",
      title: "QRST",
      description: "Lorem Ipsum is not simply random text.",
    },
    {
      id: "32",
      title: "QRST",
      description: "Lorem Ipsum is not simply random text.",
    },
    {
      id: "33",
      title: "QRST",
      description: "Lorem Ipsum is not simply random text.",
    },
    {
      id: "34",
      title: "QRST",
      description: "Lorem Ipsum is not simply random text.",
    },
    {
      id: "35",
      title: "QRST",
      description: "Lorem Ipsum is not simply random text.",
    },
  ]);

  useEffect(() => {
    console.log(data);
  });

  const handleDelete = (index) => {
    const copyArr = [...data];
    copyArr.splice(index, 1);
    setData(copyArr);
  };

  const handleSaveData = (arr, i) => {
    setData((previousArr) =>
      previousArr.map((item, index) => {
        if (index === i) {
          item.title = arr.title;
          item.description = arr.description;
          return item;
        }
        return item;
      })
    );
  };
  const handleCancelData = (i) => {
    setData((previousArr) =>
      previousArr.map((item, index) => {
        if (index === i) {
          item.title = item.title;
          item.description = item.description;
          return item;
        }
        return item;
      })
    );
  };

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleScroll = (inputValue) => {
    var myId = document.getElementById(`item_id${inputValue}`);
    console.log(myId);
    if (inputValue > -1 && inputValue < data.length) {
      document.getElementById(`item_id${inputValue}`).scrollIntoView();
    } else {
      alert("Sorry Your Index number is not valid");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInput}
        placeholder="Enter Index"
      />{" "}
      <button type="button" onClick={() => handleScroll(inputValue)}>
        GO
      </button>
      {data.map((item, index) => {
        return (
          <ChildModule
            key={index}
            item={item}
            index={index}
            handleDelete={() => handleDelete(index)}
            handleSaveData={handleSaveData}
            handleCancelData={handleCancelData}
            inputValue={inputValue}
          />
        );
      })}
    </div>
  );
}
