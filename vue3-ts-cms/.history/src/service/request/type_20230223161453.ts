import type {
  AxiosResponse,
  AxiosRequestConfig,
  AxiosRequestConfig
} from 'axios'

export interface HYRequestInterceptors {
  requestInterceptor: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig
  requestInterceptorCatch: (error: any) => any
  responseInterceptor: (config: AxiosResponse) => AxiosResponse
  responseInterceptorCatch: (error: any) => any
}

export interface HYRequestConfig extends AxiosRequestConfig {
  interceptors?: HYRequestInterceptors
}
