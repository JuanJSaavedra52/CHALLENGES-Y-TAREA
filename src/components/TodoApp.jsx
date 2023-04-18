import { useState } from "react";
import { TodoList } from "./TodoList";
import { TodoForm } from "./TodoForm";

export const TodoApp = () => {
    const [todos, setTodos] = useState([
      {
        id: new Date().getTime(),
        description: 'Hacer los challenges',
        done: false,
      },
    ]);
  
    const addTodo = (newTodo) => {
      setTodos([...todos, newTodo]);
    };
  
    const deleteTodo = (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    };
  
    return (
      <>
        <h1>TodoApp</h1>
        <hr />
        <div>
          <TodoList todos={todos} deleteTodo={deleteTodo} />
          <TodoForm addTodo={addTodo} />
        </div>
      </>
    );
  };