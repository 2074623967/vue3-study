import type { AxiosResponse, InternalAxiosRequestConfig } from 'axios'

export interface HYRequestInterceptors {
  requestInterceptor: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch: (error: any) => any
  responseInterceptor: (config: AxiosResponse) => AxiosResponse
  responseInterceptorCatch: (error: any) => any
}

export interface HYRequestConfig extends InternalAxiosRequestConfig {
  interceptors?: HYRequestInterceptors
}
