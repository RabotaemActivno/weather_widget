<template>
    <div>
        <a href="#/settings"><img class='settings' src='../assets/setting.svg' alt="настройки" /></a>
		<div class="weather-page__container">
			<div v-if="hasLocation">
				<InformationComponent v-for="item in chosenCity" :key="item.data.id" :location="item" />
			</div>
			<div v-else>Добавьте город</div>
		</div>
    </div>
</template>

<script>
import InformationComponent from '../components/InformationComponent'
import {useStore} from 'vuex';
import {computed} from 'vue';

export default {
    name: 'WeatherPage',
    components: {
        InformationComponent
    },
	setup() {
		const store = useStore()
		const chosenCity = computed(() =>  store.getters.getChosenCity)
		const hasLocation = computed(() =>  store.getters.getChosenCity.length)

		return {store, chosenCity, hasLocation}
	},
    data () {
        return {
            informationArr: []
        }
    }
}
</script>

<style lang="scss">
.weather-page__container {
	display: flex;
	flex-direction: column;
	gap: 35px;
}
.settings {
    height: 25px;
    cursor: pointer;
    position: absolute;
    left: 215px;
    top: 8px;
}
</style>