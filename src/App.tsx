import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addToDoHandler = (text: string) => {
    const newTodo = new Todo(text);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={addToDoHandler} />
      <Todos
        items={todos}
        onRemoveTodo={(toId: string) =>
          setTodos(() => {
            return todos.filter((item) => item.id !== toId);
          })
        }
      />
    </div>
  );
}

export default App;
