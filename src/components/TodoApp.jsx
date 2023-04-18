import { useEffect, useReducer } from "react"
import { TodoReducer } from "./TodoReducer"
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList"
import * as types from './types'

const initialState = []

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(TodoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

      const handleNewTodo = (todo) => {
        const action = {
            type: types.CREATE_TODO,
            payload: todo
        }
        dispatch(action)
      }

    return (
        <>
            <h1>TodoApp: 10, <small>pendientes: 2</small></h1>
            <hr />
            <div>
                <div>
                 <TodoList todos={todos} />
                </div>
                <div>
                <TodoAdd onNewTodo={handleNewTodo}/>
                </div>
            </div>

        </>
    )
}
