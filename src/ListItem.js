import React from "react";
import "./ListItem.css";

export const ListItem = ({name, onDelete}) => {
  return (
    <>
      <div className="list-item-container">
        <li className="list-item">{name}</li>
        <button id="delBtn" onClick={onDelete}>Delete</button>
      </div>

    </>
  );
};
