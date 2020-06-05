import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faPenAlt } from "@fortawesome/free-solid-svg-icons";
import { TaskListContext } from "../context/TaskListContext";

const Task = ({ task }) => {
  const { removeTask, findItem } = useContext(TaskListContext);
  return (
    <li className="list-item">
      <span>{task.title}</span>
      <div>
        <button className="btn-delete task-btn" onClick={() =>removeTask(task.id)}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
        <button className="btn-edit task-btn" onClick={()=>findItem(task.id)}>
          <FontAwesomeIcon icon={faPenAlt} />
        </button>
      </div>
    </li>
  );
};

export default Task;
