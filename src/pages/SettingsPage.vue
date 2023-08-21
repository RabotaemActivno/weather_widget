<template>
    <div>
        <a href="#/"><img class="closeBtn" src="../assets/close.svg" alt="close"></a>
        <h1 class="settings_title">Settings</h1>
        <ul class="list">
            <ListItem @del="deleteMethod" v-for="city in chosenCity" :key="city" :location="city"/>
        </ul>
        <SearchField @input="inputValueMethod" @clickEmmit="onSearchClick"/>

    </div>
</template>

<script>
import {computed} from 'vue'
import ListItem from '../components/ListItem'
import SearchField from '../components/SearchField'
import {useStore} from 'vuex'

export default {
    
    name: 'SettingsPage',
    components: {
        ListItem, SearchField
    },
    setup() {
        const store = useStore()

        const chosenCity = computed(() =>  store.getters.getChosenCity)

        return {chosenCity}
    },
    data () {
        return{
            
        }
    },
    methods: {
    }
}
</script>

<style>
.settings_title{
    font-size: 16px;
    margin-bottom: 20px;
}
.list{
    margin-bottom: 20px;
}

</style>