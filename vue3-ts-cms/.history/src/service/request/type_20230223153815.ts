import type {
  AxiosResponse,
  InternalAxiosRequestConfig,
  AxiosRequestHeaders
} from 'axios'

export interface HYRequestInterceptors {
  requestInterceptor: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig
  requestInterceptorCatch: (error: any) => any
  responseInterceptor: (config: AxiosResponse) => AxiosResponse
  responseInterceptorCatch: (error: any) => any
}

export interface HYRequestConfig extends InternalAxiosRequestConfig {
  interceptors?: HYRequestInterceptors
}
