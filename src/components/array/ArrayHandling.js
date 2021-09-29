/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { arrayListOne, arrayListTwo, arrayListThree } from "./ArrayList";

export default function ArrayHandling() {
  const [arrList, setArrList] = useState(arrayListOne);
  const [userInfo, setUserInfo] = useState({});
  const [addedArrays, setAddedArrays] = useState([]);

  useEffect(() => {
    addArrays(arrList, "Array1", true);
  }, []);

  const showUserDetails = (obj) => {
    setUserInfo(obj);
  };

  const addArrays = (arr, name, firstLoad = false) => {
    let arrLength = arrList.length;
    let startIndex = arrLength;
    let endIndex = arrLength + arr.arrLength - 1;
    let objectItems = {
      name: name,
      startIndex: startIndex,
      endIndex: endIndex,
    };

    if (firstLoad) {
      setUserInfo(arr[0]);
    } else {
      let temparrList = [...arrList];
      setArrList([...temparrList, ...arr]);
    }
    setAddedArrays([...addedArrays, objectItems]);
  };

  const removeArrays = (item, index) => {
    let start = item.startIndex;
    let end = item.endIndex;
    let tempData = [...arrList];
    let addInfos = [...addArrays];
    for (let i = start; i <= end; i++) {
      delete tempData[i];
    }
    delete addInfos[index];
    setAddedArrays(addInfos);
    setArrList(tempData);
  };
  const storeArray = (arr, name) => {
    let stored = false;
    addedArrays.map((item, index) => {
      if (item.name !== undefined && item.name === name) {
        stored = true;
        removeArrays(item, index);
      }
    });
    if (!stored) {
      addArrays(arr, name);
    }
  };

  return (
    <div>
      <div className="add_remove_arr_list">
        <div className="add_arr_list">
          Add Array: <br />
          <button onClick={() => storeArray(arrayListTwo, "array2")}>
            Array 2
          </button>{" "}
          {""}
          <button onClick={() => storeArray(arrayListThree, "array3")}>
            Array 3
          </button>
        </div>
        <div className="remove_arr_list">
          Remove Array: <br />
          <br />
        </div>
      </div>
      <div className="__view_arr_list">
        <div className="__leftside">
          {arrList.map((item) => {
            return (
              <div key={item.id}>
                <button
                  type="button"
                  onClick={() => showUserDetails(item)}
                  className="buttonName"
                >
                  {item.name}
                </button>
              </div>
            );
          })}
        </div>
        <div className="__rightside">
          <div>
            <p>Name: {userInfo !== {} && userInfo.name}</p>
            <p>City: {userInfo !== {} && userInfo.address?.city}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
