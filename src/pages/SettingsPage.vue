<template>
    <div>
        <img class="closeBtn" src="../assets/close.svg" alt="close">
        <h1 class="settings_title">Settings</h1>
        <ul class="list">
            <ListItem/>
        </ul>
        <SearchField/>

    </div>
</template>

<script>
import ListItem from '../components/ListItem'
import SearchField from '../components/SearchField'

export default {
    name: 'SettingsPage',
    components: {
        ListItem, SearchField
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