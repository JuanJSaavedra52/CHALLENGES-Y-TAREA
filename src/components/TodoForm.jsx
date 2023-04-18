import { useState } from "react";

 export const TodoForm = ({ addTodo }) => {
    const [newTodo, setNewTodo] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      addTodo({
        id: new Date().getTime(),
        description: newTodo,
        done: false,
      });
      setNewTodo('');
    };
  
    return (
      <div>
        <h4>Agregar TODO</h4>
        <hr />
        <form onSubmit={handleSubmit}>
          <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
          <button>Agregar</button>
        </form>
      </div>
    );
  };