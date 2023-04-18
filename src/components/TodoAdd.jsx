import React from 'react'
import { useState } from 'react';

export const TodoAdd = ({ onNewTodo }) => {
    const [newTodoDescription, setNewTodoDescription] = useState('');

    const onFormSubmit = (evt) => {
        evt.preventDefault();

        const newTodo = {
            id: new Date().getTime(),
            description: newTodo,
            done: false,
        };
        onNewTodo(newTodo);

        setNewTodoDescription('')
    };

    return (
        <form onSubmit={(evt) => onFormSubmit(evt)}>
            <input
                type='text'
                placeholder='Tarea'
                value={newTodoDescription}
                onChange={evt => setNewTodoDescription(evt.target.value)} />
            <button
                type='submit'
            >
                Agregar
            </button>
        </form>
    )
}
