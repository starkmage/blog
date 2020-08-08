import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element'
import './assets/css/style.css'
import './plugins/date-filters'
import http from './network//http'
//markdown编辑插件
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)

Vue.config.productionTip = false

Vue.prototype.$http = http

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
