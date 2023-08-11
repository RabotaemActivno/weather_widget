<template>
  <div class="App">
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      inputValue: 1,
      locations: [
        { id: Date.now(), name: 'Moscow' },
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
    async onSearchClick() {
      console.log('idi nahuy');
      if (this.inputValue) {
        try {
          const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.inputValue}&appid=587e51c75b7ee1a646462b17302866a9`)
          const newLocations = { id: Date.now(), name: response.data.name }
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

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
}

.App {
  width: 250px;
  border: 1px solid black;
  border-radius: 8px;
  padding: 15px 8px 8px 8px;
  position: relative;
}
</style>
