import { useState } from "react";
import { useCounter } from '../hooks/useCounter'
import { Small } from "./Small";

export const Memorize = () => {
    const { count, increment } = useCounter(10);
    const [first, setFirst] = useState(10);

    return (
        <>
            <h1>Memorize <Small value={count} /></h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={() => increment()}
            >
                +1
            </button>

            <button
                className="btn btn-primary"
                onClick={() => setFirst(20)}
            >
                +1
            </button>
        </>
    )
}