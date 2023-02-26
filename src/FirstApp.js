import React from "react"
import { useState } from "react"
import { useCounter } from "./hooks/useCounter"

const FirstApp = ({value}) => {
    const {count, increment, decrement, reset} = useCounter(value)


    return (
        <>

            <h1> Counter </h1>
            <span> { count } </span>
            <button onClick={ () => increment() }>+1</button>
            <button onClick={ () => decrement() }>-1</button>
            <button onClick={ () => reset() }>Reset</button>
        </>
    )
}

export default FirstApp