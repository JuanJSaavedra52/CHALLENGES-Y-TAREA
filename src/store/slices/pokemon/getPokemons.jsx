import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoading } from "./pokemonSlice";

export const getPokemons = ( page = 0) => {
    return async (dispatch, getState) => {
        dispatch( startLoading() );

        const resp = await pokemonApi.get( `pokemon?limit=10&offset=${ page * 10}`)

        dispatch( setPokemons(
            {
                getPokemons: data.results,
                page: page + 1
            }
        ) );
    }
}