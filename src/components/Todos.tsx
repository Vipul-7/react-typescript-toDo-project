import Todo from "../models/todo";
import TodoCard from "./TodoCard";
import classes from "./Todos.module.css";

const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (
  props
) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoCard
          taskName={item.text}
          status={false}
          key={item.id}
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
