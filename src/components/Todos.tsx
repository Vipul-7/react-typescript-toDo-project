import { useContext } from "react";

import TodoCard from "./TodoCard";
import classes from "./Todos.module.css";
import { TodosContext } from "../store/todos-context";

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoCard
          taskName={item.text}
          status={false}
          key={item.id}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)} // bind() returns a new function where the "this" keyword is set to the first argument passed to bind() and the remaining arguments are set to the remaining arguments passed to bind() in order.  In this case, the "this" keyword is set to null and the first argument passed to bind() is the id of the todo item.
          // bind() generally does pre-configuring of a function to get the right id for the todo item.
        />
      ))}
    </ul>
  );
};

export default Todos;
