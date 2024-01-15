import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import i18n from '@/locales'

Vue.config.productionTip = false

import Flicking from '@egjs/vue-flicking'
import '@egjs/vue-flicking/dist/flicking.css'
import '@egjs/vue-flicking/dist/flicking-inline.css'

import '@egjs/flicking-plugins/dist/flicking-plugins.css'

Vue.use(Flicking)

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount('#app')
