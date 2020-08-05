import axios from 'axios'
import Vue from 'vue'
import router from '../router/index'

const http = axios.create({
  baseURL: 'http://localhost:8000/admin/api',
  timeout: 50000
})

//请求拦截器
http.interceptors.request.use(config => {
  const token = localStorage.getItem('token') || ''
  if (token) {
    config.headers.Authorization = 'Bearer' + token
  }
  return config
}, err => {
  return Promise.reject(err)
})

//响应拦截器
http.interceptors.response.use(response => {
  return response
}, err => {
  if (err.response.status === 422) {
    //$message是element的插件，用于弹窗提示，type表示弹窗的样式
    Vue.prototype.$message({
      type: 'error',
      message: err.response.data.message
    })
  }
  //
  if (err.response.status === 401) {
    router.push('/login')
  }
  return Promise.reject(err)
})

export default http