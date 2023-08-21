<template>
    <div>
        <h1 class="title">{{ location.data.name }}, {{ location.data.sys.country }}</h1>
        <div class="temp">
            <div>
                <img class="image" src='../assets/cloud.svg' alt="cloud" />
            </div>
            <div>{{ (location.data.main.temp - 273.15).toFixed(0) }} c</div>
        </div>
        <div class="description">
            <p>Feels like {{(location.data.main.feels_like - 273.15).toFixed(0)}}C. {{ capitalizeFirstLetter(location.data.weather[0].main) }}. {{ capitalizeFirstLetter(location.data.weather[0].description) }}</p>
            <div class="grid">
                <div class="item1 flex">
                    <img class="grid_img" src='../assets/wind.svg' alt="wind" />
                    <p>{{location.data.wind.speed}}m/s {{getWindDirection(location.data.wind.deg)}}</p>
                </div>
                <div class="item2 flex">
                    <img class="grid_img" src="../assets/barometer.svg" alt="barometer" />
                    <p>{{location.data.main.pressure}}hPa</p>
                </div>
                <div class="item3">
                    <p>Humidity: {{location.data.main.humidity}}%</p>
                </div>
                <div class="item4">
                    <p>Dew point: 0%</p>
                </div>
                <div class="item5">
                    <p>Visibility: {{location.data.visibility/1000}}km</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InformationComponent',
	props: {
		location: Object
	},
    methods: {
		capitalizeFirstLetter(string) {
			return string.charAt(0).toUpperCase() + string.slice(1);
		},
        getWindDirection(deg) {
            const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
            const index = Math.round(deg / 22.5) % 16;
            return directions[index];
        }
    }
}
</script>

<style lang="scss" scoped>
.title {
    font-size: 16px;
}

.temp {
    margin-top: 20px;
    gap: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 40px;
    font-weight: normal;
    margin-bottom: 10px;
}

.image {
    height: 80px;
}

.description {
    font-size: 14px;
}

.grid_img {
    height: 20px;
}

.flex {
    display: flex;
    gap: 5px;
    align-items: center;
}

.grid {
    width: 100%;
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
}

.item1 {
    grid-area: 1 / 1 / 2 / 2;
}

.item2 {
    grid-area: 1 / 2 / 2 / 3;
}

.item3 {
    grid-area: 2 / 1 / 3 / 2;
}

.item4 {
    grid-area: 2 / 2 / 3 / 3;
}

.item5 {
    grid-area: 3 / 1 / 4 / 2;
}
</style>