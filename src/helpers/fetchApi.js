import axios from 'axios'

//Primer llamado base
export const getPokemon = async() => {
    const URL_BASE = `https://pokeapi.co/api/v2/pokemon`
    const { data } = await axios.get(URL_BASE) 
    return data.results
}

//Segundo llamado para obtener nombre e img
export const getPokemonData = async(pokemonList, pokemonListData) => {
    pokemonList.map(async (pokemon) => {
        const { data } =  await axios.get(pokemon.url)
        const { name, sprites: { other: { "official-artwork": { front_default } } } } 
        = data
        const pokemonData = { name, front_default }

        pokemonListData.push(pokemonData)
    });
}