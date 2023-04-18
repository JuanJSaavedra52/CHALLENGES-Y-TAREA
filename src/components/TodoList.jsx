export const TodoList = ({ todos, deleteTodo }) => {
    return (
      <div>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span>{todo.description}</span>
              <button onClick={() => deleteTodo(todo.id)}>Borrar</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };