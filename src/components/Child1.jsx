import React from 'react'

export const Child1 = () => {
    return (
        <>
            <div>Child Component 1</div>
            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>
        </>
    )
}
