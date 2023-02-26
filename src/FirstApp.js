import React from "react"
import { useState } from "react"
import { useCounter } from "./hooks/useCounter"

const FirstApp = ({value}) => {
    const {counter, setCounter} = useCounter(value)


    return (
        <>

            <h1> Counter </h1>
            <span> { counter } </span>
            <button onClick={ () => Increment }>+1</button>
            <button onClick={ () => Decrement }>-1</button>
            <button onClick={ () => Reset }>Reset</button>
        </>
    )
}

export default FirstApp