import { useContext } from "react";
import { TodosContext } from "../store/todos-context";

import React from "react";
import { useRef } from "react";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  const todoTextInput = useRef<HTMLInputElement>(null); // typescript doesn't know what type of value is stored in this ref that's why we have to specify it manually by using HTMLInputElement

  const sbmitHandler = (event: React.FormEvent) => {
    // typescript doesn't know what type of event is passed to this function that's why we have to specify it manually by using React.FormEvent
    event.preventDefault();

    const enteredText = todoTextInput.current!.value; // this question mark addition here signals to TypeScript that it tries to access value and if that succeeds, the entered value will be stored in enteredText but if that fails, if the connection should not be established yet, null will be stored in enteredText.

    todosCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={sbmitHandler} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextInput} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
