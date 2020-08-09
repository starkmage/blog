import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/scss/style.scss' //全局样式
import './plugins/element'  //element-ui
import './assets/iconfont/iconfont.css' //阿里图标库
import './plugins/filter'
import './plugins/highlight'
import http from './network/http'

//阻止启动生产消息
Vue.config.productionTip = false

Vue.prototype.$http = http

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
