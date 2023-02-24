import type {
  AxiosResponse,
  InternalAxiosRequestConfig,
  AxiosRequestConfig
} from 'axios'

export interface HYRequestInterceptors {
  requestInterceptor: (config: AxiosRequestConfig) => InternalAxiosRequestConfig
  requestInterceptorCatch: (error: any) => any
  responseInterceptor: (config: AxiosResponse) => AxiosResponse
  responseInterceptorCatch: (error: any) => any
}

export interface HYRequestConfig extends InternalAxiosRequestConfig {
  interceptors?: HYRequestInterceptors
}
