import axios from 'axios'
import NProgress from '../plugins/nprogress'

const http = axios.create({
  baseURL: 'http://localhost:8000/web/api',
  timeout: 50000
})

//axios请求拦截器
http.interceptors.request.use(
  config => {
    NProgress.start()
    return config
  },
  err => Promise.reject(err)
)
//axios响应拦截器
http.interceptors.response.use(
  res => {
    NProgress.done()
    return res.status === 200 ? Promise.resolve(res) : Promise.reject(res)
  },
  err => Promise.reject(err)
)

export default http