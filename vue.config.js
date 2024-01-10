const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: ['vuetify'],
  pages: {
    index: {
      entry: 'src//main.ts',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Gmae Platform',
    },
  },
})
