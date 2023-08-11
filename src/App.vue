<template>
  <div class="App">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
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
