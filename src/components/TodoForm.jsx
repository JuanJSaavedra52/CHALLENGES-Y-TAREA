import { useState } from "react";

 export const TodoForm = ({ addTodo }) => {
    const [nuevoTodo, setNuevoTodo] = useState('');
  
    const newTodo = (evt) => {
      evt.preventDefault();
      addTodo({
        id: new Date().getTime(),
        description: nuevoTodo,
        done: false,
      });
      setNuevoTodo('');
    };
  
    return (
      <div>
        <h4>Agregar TODO</h4>
        <hr />
        <form onSubmit={newTodo}>
          <input value={nuevoTodo} onChange={(evt) => setNuevoTodo(evt.target.value)} />
          <button>Agregar</button>
        </form>
      </div>
    );
  };