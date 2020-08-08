import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/scss/style.scss'
import './plugins/element'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
