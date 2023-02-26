import { useState } from "react"

export const useCounter = (value) => {
    const [counter, setCounter] = useState(value);

    const Increment = () => {
        setCounter(counter + 1);

    }

    const Decrement = () => {
        setCounter(counter - 1);
    }

    const Reset = () => {
        setCounter(value);
    }

    return {
        count: counter,
        increment: Increment,
        decrement: Decrement,
        reset: Reset
    }
}