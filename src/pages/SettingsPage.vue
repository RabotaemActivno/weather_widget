<template>
    <div>
        <a href="/"><img class="closeBtn" src="../assets/close.svg" alt="close"></a>
        <h1 class="settings_title">Settings</h1>
        <ul class="list">
            <ListItem v-for="item in chosenCity" :key="item.data.id" :location="item"/>
        </ul>
        <SearchField />
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