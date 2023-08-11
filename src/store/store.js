import { createStore } from 'vuex'
import axios from 'axios'


const store = createStore({
    state() {
        return {
            chosenCity: [],
        }
    },
    mutations: {
        addCity (state, payload) {
            state.chosenCity.push(payload)
        },
        removeCity (state, payload) {
            state.chosenCity.filter((item) => item !== payload)
        }
    },
    actions: {
        addCity(state, payload) {
            store.commit('addCity', payload)
        },
        removeCity(state, payload) {
            store.commit('removeCity', payload)
        },
        async fetchCity(store, payload) {
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=587e51c75b7ee1a646462b17302866a9`)
                store.dispatch('addCity', response.name)
            } catch (err) {
                console.log(err);
            }

        }
    },
    getters: {
        getChosenCity(state) {
            return state.chosenCity
        }
    }
})

export default store