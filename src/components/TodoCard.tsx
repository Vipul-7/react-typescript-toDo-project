import React from "react";
import classes from "./TodoCard.module.css";

const TodoCard: React.FC<{
  taskName: string;
  status: boolean;
  onRemoveTodo: () => void;
}> = (props) => {
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>
      <span>{!props.status && "Not Completed * "}</span>
      <section style={{ display: "inline" }}>{props.taskName}</section>
    </li>
  );
};

export default TodoCard;
