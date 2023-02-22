import { useCounter } from './hooks/useCounter';

export const Counter = ( {value} ) => {
    //const [counter, setCounter] = useState(value);
    const {count, increment, decrement, reset} = useCounter( value )

    /*const handleAdd = () => {
        setCounter(counter + 1);
    }

    const handleSubsstract = () => {
        setCounter(counter - 1);
    }

    const handleReset = () => {
        setCounter(value);
    }
*/
    return (
        <>
            <div className='App'>
                <h1> Counter </h1>
                <span> {count}</span>
                <button onClick={() => increment()}> +1 </button>
                <button onClick={() => decrement()}> -1 </button>
                <button onClick={() => reset()}> Reset </button>
            </div>

        </>
    )
}