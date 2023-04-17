import React from "react";
import { memo, useCallback } from "react";

export const Son = memo(({ numero, increment }) => {
    console.log('again reloaded...');
    const handleClick = useCallback(() => {
        increment(numero);
      }, [increment, numero]);
    return (
        <button
            className="btn btn-primary mr-3"
            onClick={() => { handleClick}}
        >
            { numero }
        </button>
    )
}
)