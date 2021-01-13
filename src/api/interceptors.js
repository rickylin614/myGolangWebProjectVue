
import axios from 'axios'

// 初始化axios
const service = axios.create({
  baseURL: '/', // api的base_url
  timeout: 1000 * 30 // 超時時間設定30秒
})

// request interceptors
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response interceptors
service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    // Do something with response error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

export default service
