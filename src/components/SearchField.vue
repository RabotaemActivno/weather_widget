<template>
    <div class="input_field">
        <input v-model="inputValue" type="text" name="" id="">
        <img @click="onClickHandler" src="../assets/enter.svg" alt="enter">
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'SearchField',
    data () {
        return{
            inputValue: null
        }
    },
    methods: {
        async onClickHandler () {
            if (this.inputValue) {
                try {
                    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.inputValue}&appid=587e51c75b7ee1a646462b17302866a9`)
                    console.log(response.data);
                } catch (err) {
                    console.log(err);
                }
            }
        }
    }
}
</script>

<style lang="scss">
.input_field{
    display: flex;
    justify-content: space-between;
    input{
        width: 100%;
        padding: 5px;
        border: 1px solid black;
        border-radius: 8px;
        :focus {
            border-color: aqua;
        }
    }
}
img{
    height: 25px;
    cursor: pointer;
}
</style>