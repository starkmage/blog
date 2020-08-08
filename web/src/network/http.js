import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:8000/web/api',
  timeout: 50000
})

export default http