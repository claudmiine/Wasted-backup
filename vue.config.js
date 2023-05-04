const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {     port: 8000,     proxy: "http://127.0.0.1:8000/api/"   } 
})
