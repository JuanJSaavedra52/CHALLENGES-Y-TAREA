import React from 'react'

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
    return (
    <li>
        <span 
        onClick={() => onToggleTodo(todo.id)}
        className={
            `align-self-center 
            ${todo.done ? 'text-decoration-line-through' : ''}`
        } 
        >
            {todo.description}
            </span>
        <button onClick={() => {onDeleteTodo(todo.id)}}
        >Borrar</button>
    </li >
  )
}
