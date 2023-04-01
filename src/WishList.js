import React, { useState } from "react";
import "./WishList.css";
import { ListItem } from "./ListItem";

export const WishList = () => {
  const [items, setItems] = useState([]);
  const addItem = () => {
    const itemName = document.getElementById("itemName").value;
    if (itemName !== "")
      setItems([...items, itemName]);
    if (itemName == "")
      alert ("You cannot leave this empty")
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };
  return (
    <>
      <div className="list-box">
        <h2>
          Wish List
        </h2>
        
        <div className="head">
          <input id="itemName" type="text" />
          <button id="addBtn" onClick={addItem}>
            Add
          </button>
          </div>
          <div className="list">
            {items.map((item, index) => (
              <ListItem
                key={index}
                index={index}
                name={item}
                onDelete={() => removeItem(index)}
              />
            ))}
          </div>
        </div>
    </>
  );
};
