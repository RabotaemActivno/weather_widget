<template>
    <div>
        <h1 class="title">{{ weatherDataCity }}, {{ weatherDataCountry }}</h1>
        <div class="temp">
            <div>
                <img class="image" src='../assets/cloud.svg' alt="cloud" />
            </div>
            <div>{{ weatherDataTemp }} c</div>
        </div>
        <div class="description">
            <p>Feels like {{weatherDataFeelsLike}}C. {{ weatherDataWeather }}. {{ weatherDataWeatherDesc }}</p>
            <div class="grid">
                <div class="item1 flex">
                    <img class="grid_img" src='../assets/wind.svg' alt="wind" />
                    <p>{{weatherDataWindSpeed}}m/s {{weatherDataWindDirection}}</p>
                </div>
                <div class="item2 flex">
                    <img class="grid_img" src="../assets/barometer.svg" alt="barometer" />
                    <p>{{weatherDataPressure}}hPa</p>
                </div>
                <div class="item3">
                    <p>Humidity: {{weatherDataHumidity}}%</p>
                </div>
                <div class="item4">
                    <p>Dew point: 0%</p>
                </div>
                <div class="item5">
                    <p>Visibility: {{weatherDataVisibility}}km</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

export default {
    name: 'InformationComponent',
    data() {
        return {
            weatherDataCity: null,
            weatherDataCountry: null,
            weatherDataTemp:null,
            weatherDataFeelsLike: null,
            weatherDataWeatherDesc: null,
            weatherDataWeather: null,
            weatherDataWindSpeed: null,
            weatherDataWindDirection: null,
            weatherDataPressure: null,
            weatherDataHumidity: null,
            weatherDataVisibility: null,
        }
    },
    mounted() {
        this.fetchWeatherData()
    },
    methods: {
        async fetchWeatherData()  {
            try {
                const response = await axios
                    .get(`https://api.openweathermap.org/data/2.5/weather?lat=55.75&lon=37.61&appid=587e51c75b7ee1a646462b17302866a9`)
                this.weatherDataCity = response.data.name
                this.weatherDataCountry = response.data.sys.country
                this.weatherDataTemp = (response.data.main.temp - 273.15).toFixed(0)
                this.weatherDataFeelsLike = (response.data.main.feels_like - 273.15).toFixed(0)
                this.weatherDataWeatherDesc = capitalizeFirstLetter(response.data.weather[0].description)
                this.weatherDataWeather = capitalizeFirstLetter(response.data.weather[0].main)
                this.weatherDataWindSpeed = response.data.wind.speed
                this.weatherDataWindDirection = this.getWindDirection(response.data.wind.deg)
                this.weatherDataPressure = response.data.main.pressure
                this.weatherDataHumidity = response.data.main.humidity
                this.weatherDataVisibility = response.data.visibility/1000

            } catch (error) {
                console.log(error);
            }
        },
        getWindDirection(deg) {
            const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
            const index = Math.round(deg / 22.5) % 16;
            return directions[index];
        },
        
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