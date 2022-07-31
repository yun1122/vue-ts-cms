import { AxiosRequestConfig, AxiosResponse } from "axios"

// 封装拦截器自定义自己的拦截器
export interface JLYRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  resquestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface JLYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: JLYRequestInterceptors<T>
  showLoading?: boolean
}
