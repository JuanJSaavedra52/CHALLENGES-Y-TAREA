import { useEffect } from "react";
import { useDispatch } from "react-redux"

export const PokemonApp = () => {
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemons())
    }, [])

    return(
        <div>pokemonApp</div>
    )
}