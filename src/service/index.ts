//axios封装
import JLYRequest from "./request"
import { BASE_URL, TIME_OUT } from "./request/config"

const jlyRequest = new JLYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  // 实例的拦截器
  interceptors: {
    requestInterceptor: (config) => {
      console.log("qingqiulanjie")
      return config
    },
    resquestInterceptorCatch: (err) => {
      console.log("qingqiulanjiesjhibai")
      return err
    },
    responseInterceptor: (config) => {
      return config
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})

export default jlyRequest
