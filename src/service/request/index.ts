import axios from "axios"
import type { AxiosInstance } from "axios"
import { JLYRequestInterceptors, JLYRequestConfig } from "./type"
import { ElLoading } from "element-plus"
import { LoadingInstance } from "element-plus/lib/components/loading/src/loading"

class JLYRequest {
  instance: AxiosInstance
  interceptors?: JLYRequestInterceptors
  showLoading: boolean //是否需要loading
  loading?: LoadingInstance

  constructor(config: JLYRequestConfig) {
    this.instance = axios.create(config)
    this.showLoading = config.showLoading ?? true
    this.interceptors = config.interceptors
    // 拦截器封装request
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptorCatch,
      this.interceptors?.responseInterceptor
    )
    // 添加所有都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading === true) {
          this.loading = ElLoading.service({
            lock: true,
            text: "加载中",
            background: "rgb(0,0,0.5)"
          })
        }

        console.log("所有拦截器")
        return config
      },
      (err) => {
        return err
      }
    ),
      this.instance.interceptors.response.use(
        (config) => {
          // 将loading移除
          this.loading?.close()
          return config
        },
        (err) => {
          console.log("全局响应错误拦截器")
          // 错误请求移除loading
          this.loading?.close()
          if (err.response.status === 404) {
            console.log("404错误")
          }
          return err
        }
      )
  }
  request<T = any>(config: JLYRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          resolve(res)
          console.log(res)
        })
        .catch((err) => {
          return err
        })
    })
  }
  // request(){},
  get<T>(config: JLYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "GET" })
  }
  post<T>(config: JLYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "POST" })
  }
  delete<T>(config: JLYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "DELETE" })
  }
  patch<T>(config: JLYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "PATCH" })
  }
}

export default JLYRequest
