<template>
    <div>
        <a href="#/"><img class="closeBtn" src="../assets/close.svg" alt="close"></a>
        <h1 class="settings_title">Settings</h1>
        <ul class="list">
            <ListItem @del="deleteMethod" v-for="location in locations" :key="location.id" :location="location"/>
        </ul>
        <SearchField @input="inputValueMethod" @clickEmmit="onSearchClick"/>

    </div>
</template>

<script>
import axios from 'axios'
import ListItem from '../components/ListItem'
import SearchField from '../components/SearchField'

export default {
    name: 'SettingsPage',
    components: {
        ListItem, SearchField
    },
    data () {
        return{
            inputValue: null,
            locations: [
                {id: Date.now(), name: 'Moscow'},
            ]
        }
    },
    methods: {
        deleteMethod(id) {
            this.locations = this.locations.filter(item => item.id !== id);
            console.log(id);
        },
        inputValueMethod(value) {
            this.inputValue = value
        },
        async onSearchClick () {
            console.log('idi nahuy');
            if (this.inputValue) {
                try {
                    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.inputValue}&appid=587e51c75b7ee1a646462b17302866a9`)
                    const newLocations = {id: Date.now(), name: response.data.name}
                    this.locations.push(newLocations)
                    console.log(this.locations);
                } catch (err) {
                    console.log(err);
                }
            }
        }
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