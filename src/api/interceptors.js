
import axios from 'axios'
import {MessageBox} from 'element-ui'

// 初始化axios
const service = axios.create({
  baseURL: '/go/_ajax/', // api的base_url
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
    var data = {
      "msg" : "請求服務器失敗，請確認連線是否異常",
      "code" : "error"
    }
    return Promise.reject(data)
  }
)

// response interceptors
service.interceptors.response.use(
  response => {
    // console.log(response)
    if (response.data.code == "notLogin") {
      // Message.info("請登入")
      MessageBox.alert('尚未登入或登入資訊過期，請重新登入。','溫馨提示', {
        confirmButtonText: '登入',
        type: 'warning'
      }).then(()=> {
        document.location.href = '/login' //自動跳轉登入頁
      })
      return response.data
    }
    if (response.data && response.data.code === 'error') {
      return Promise.reject(response.data)
    } else {
      return response.data
    }
  },
  error => {
    // Do something with response error
    console.log(error) // for debug
    
    var data = {
      "msg" : "請求服務器失敗，請確認連線是否異常",
      "code" : "error"
    }
    return Promise.reject(data)
  }
)

export default service
