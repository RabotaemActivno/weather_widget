const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/weather_widget/'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/styles/main.scss";`, // Путь к вашему основному SCSS файлу
      },
    },
  },
};