import React from "react";
import Todo from "../models/todo";
import { useState } from "react";

type TodosContextObject = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

const TodosContext = React.createContext<TodosContextObject>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

type Props = {
  children?: React.ReactChild | React.ReactChild[];
};

const TodosContextProvider: React.FC<Props> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addToDoHandler = (text: string) => {
    const newTodo = new Todo(text);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (toId: string) => {
    setTodos(() => {
      return todos.filter((item) => item.id !== toId);
    });
  };

  const contextValue: TodosContextObject = {
    items: todos,
    addTodo: addToDoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export { TodosContext };
export default TodosContextProvider;
