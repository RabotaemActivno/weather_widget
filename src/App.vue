<template>
  <div class="App">
    <SettingsPage/>
  </div>
</template>

<script>
// import WeatherPage from './pages/WeatherPage'
import SettingsPage from './pages/SettingsPage'
export default {
  name: 'App',
  components: {
    SettingsPage,
    // WeatherPage
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing:border-box;
}
body {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center ;
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
