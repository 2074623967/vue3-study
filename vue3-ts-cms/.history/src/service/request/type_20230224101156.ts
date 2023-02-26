import type { AxiosResponse, AxiosRequestConfig } from 'axios'

export interface HYRequestInterceptors<T></T> {
  requestInterceptor: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch: (error: any) => any
  responseInterceptor: (config: AxiosResponse) => AxiosResponse
  responseInterceptorCatch: (error: any) => any
}

export interface HYRequestConfig extends AxiosRequestConfig {
  interceptors?: HYRequestInterceptors
  showLoading?: boolean
}
