<script>

export default {
    props: {
        text: {
            type: String,
            required: true,
        }
    }
}

</script>


<template>

    <button>
        {{ text }}
    </button>

</template>


<style scoped>

button{
    background-color: #E83E34;
    color: white;

    padding: 0.5rem;
    font-weight: 500;
    margin-left: 3%;
    border-radius: 30px;
    border-style: none;
    box-shadow: 1px 1px 5px #d5d1d1;

    transition: 100ms;
    cursor: pointer;
}

button:hover{

    transform: scale(1.1);
    background-color: #ff392f;
}

</style>

