import React, { useState } from "react";
import "./ListItem.css";
import movetoTopIcon from "./movetoTopIcon.png";

export const ListItem = (props) => {
  const [selectedPriority, setSelectedPriority] = useState(props.priority);

  const moveToTop = () => {
    props.onMoveToTop(props.index);
  };
  const handleSelectChange  =(event) =>{
    setSelectedPriority(event.target.value);
 
  };
  return (
    <>
      <div className="list-item-container">
        <li className="list-item">{props.name}</li>
        <div className="btns-container">
         {/* if props.priority is changd with selectedValue then sort functionality     is disturbed otherwise update is disturbed ..*/}
          <select
            id="task-priority"
            className={`select ${
              props.priority === "High" 
                ? "high-priority"
                : props.priority === "Medium"
                ? "medium-priority"
                : "low-priority"
            }`}
            value={props.priority}
            onChange={handleSelectChange}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
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
