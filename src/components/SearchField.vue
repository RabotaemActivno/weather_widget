<template>
    <div class="input_field">
        <input v-model="inputValue" type="text" name="" id="">
        <img @click="onClickHandler" src="../assets/enter.svg" alt="enter">
    </div>
</template>

<script>
import {useStore} from 'vuex';

export default {
    name: 'SearchField',
    data () {
        return{
            inputValue: ''
        }
    },
    setup() {
        const store = useStore();

        return {store};
    },
    methods: {
       onClickHandler() {
        this.store.dispatch('fetchCity', this.inputValue);
        // this.store.dispatch('addCity', this.inputValue)
        // this.$emit('input', this.inputValue)
        // this.$emit('clickEmmit')
        // console.log(this.store.getters.getChosenCity)
        this.inputValue = ''
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