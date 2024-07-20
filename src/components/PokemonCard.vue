<script>
import ButtonTryGuess from './ButtonTryGuess.vue';

export default {
    props: {
        pokemon: {
            type: Object,
            required: true,
        }
    },
    components: {
        ButtonTryGuess,
    },
    data() {
        return {
            notguessed: false,
            guessed: '',
        }
    },
    computed: {
        nameFilter ()  {  return  { filter: this.notguessed ? 'none' : 'blur(10px) grayscale(100%)' } },
        imageFilter()  {  return  { filter: this.notguessed ? 'none' : 'blur(10px) grayscale(100%)' } }
    },
    methods: {
        checkAnswer() {
            if (this.guessed.toLowerCase() === this.pokemon.name.toLowerCase()) {
                this.notguessed = true;
                this.$emit('pokemonGuessed')
            } else {
                alert('¡Inténtalo otra vez!')
            }
        }
    }
}

</script>


<template>

    <div class="card">

        <img :src="pokemon.front_default" :style="imageFilter" alt="Img de `${pokemon.name}`">
        <p :style="nameFilter">{{ pokemon.name }}</p>

        <input v-model="guessed" :disabled="notguessed" v-if="!notguessed" type="text">

        <ButtonTryGuess
            v-if="!notguessed" 
            :disabled="notguessed" 
            :text="'Adivinar'" 
            @click="checkAnswer">

        </ButtonTryGuess>

    </div>

</template>


<style scoped>

.card{
    border-radius: 50px;
    box-shadow: 1px 1px 5px #afacac;
    width: 300px;
    padding: 1rem;
    transition: 350ms;
}

img{
    width: 250px;
    height: 250px;
}

input{
    border-radius: 30px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.5);
}

p{
    font-size: 18px;
    font-weight: bold;
    text-shadow: 1px 1px 3px #ccc;
}

</style>