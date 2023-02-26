import type { AxiosResponse, AxiosRequestConfig } from 'axios'

export interface HYRequestInterceptors<T = AxiosResponse> {
  requestInterceptor: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch: (error: any) => any
  responseInterceptor: (config: T) => T
  responseInterceptorCatch: (error: any) => any
}

export interface HYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HYRequestInterceptors<T = AxiosResponse>
  showLoading?: boolean
}
