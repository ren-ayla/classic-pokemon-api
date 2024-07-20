<script>

import PokemonCard from './components/PokemonCard.vue';
import { getPokemon, getPokemonData } from './helpers/fetchApi';

export default {

    name: 'App',
    components: {
        PokemonCard
    },
    data () {
        return {
            pokemonList: [],
            count: 0
        }
    },
    methods: {
        async getPokemon() {
            const getData = await getPokemon();
            await getPokemonData(getData, this.pokemonList)
        },
        addCount() {
            this.count++
        }
    },
    mounted() {
        this.getPokemon()
    }
} 

</script>


<template>

    <div class="app">

        <img src="../public/pokelogo.svg" alt="Logo Pokémon Oficial">
        <h1>¿Quién es ese Pokémon?</h1>
        <h3>Pokemones descubiertos : <span>{{ count }}</span></h3>

        <div class="cards-container">
            <PokemonCard 
            v-for="(pokemon, index) in pokemonList" 
            :key="index" 
            :pokemon="pokemon"
            @pokemonGuessed="addCount"></PokemonCard>
        </div>

    </div>

</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

#app{
    font-family: "Montserrat", sans-serif;
    text-align: center;
}

button{
    font-family: "Montserrat", sans-serif;
}

.cards-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
}

h3{
    margin-bottom: 3rem;
}

span{
    font-weight: bolder;

    border-radius: 3px;
    color: #FFCB05;
    padding-left: 0.2rem;
    padding-right: 0.2rem;
    background-color: #0E508D;
}

</style>