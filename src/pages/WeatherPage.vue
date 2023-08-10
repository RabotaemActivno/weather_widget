<template>
    <div>
        <a href="#/settings"><img class='settings' src='../assets/setting.svg' alt="настройки" /></a>
        <InformationComponent />
    </div>
</template>

<script>
import InformationComponent from '../components/InformationComponent'
export default {
    name: 'WeatherPage',
    components: {
        InformationComponent
    }
}
</script>

<style lang="scss">
.settings {
    height: 25px;
    cursor: pointer;
    position: absolute;
    left: 215px;
    top: 8px;
}
</style>