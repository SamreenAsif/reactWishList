import React from "react";
import "./ListItem.css";
import movetoTopIcon from "./movetoTopIcon.png";


export const ListItem = (props) => {
  const moveToTop = () => {
    props.onMoveToTop(props.index);
  };
  return (
    <>
      <div className="list-item-container">
        <li className="list-item">{props.name}</li>
        <div className="btns-container">
          <label
            htmlFor="task-priority"
            className={`label ${
              props.priority === "High"
                ? "high-priority"
                : props.priority === "Medium"
                ? "medium-priority"
                : "low-priority"
            }`}
          >
            {props.priority}
          </label>
          <button id="delBtn" onClick={props.onDelete}>
            Delete
          </button>
          <button class="moveToTopBtn" onClick={moveToTop}>
            <img class="image" src={movetoTopIcon} alt="Move to Top" />
          </button>
        </div>
      </div>
    </>
  );
};
