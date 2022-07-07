import { AxiosRequestConfig, AxiosResponse } from "axios"

// 封装拦截器自定义自己的拦截器
export interface JLYRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  resquestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: any) => any
  responseInterceptorCatch?: (error: any) => any
}

export interface JLYRequestConfig extends AxiosRequestConfig {
  interceptors?: JLYRequestInterceptors
  showLoading?: boolean
}
