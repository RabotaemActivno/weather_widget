<template>
    <div class="input_field">
        <input v-model="inputValue" type="text" name="" id="">
        <img @click="onClickHandler" src="../assets/enter.svg" alt="enter">
    </div>
</template>

<script>

export default {
    name: 'SearchField',
    data () {
        return{
            inputValue: ''
        }
    },
    methods: {
       onClickHandler() {
        this.$emit('input', this.inputValue)
        this.$emit('clickEmmit')
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