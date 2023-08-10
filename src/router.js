import {createRouter, createWebHashHistory} from 'vue-router'
import SettingsPage from './pages/SettingsPage.vue'
import WeatherPage from './pages/WeatherPage.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes:[
        {path:'/settings', component: SettingsPage},
        {path:'/', component: WeatherPage, alias: '/'},
    ]
})