import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

interface HYRequestInterceptors {
  requestInterceptor: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch: (error: any) => any
  responseInterceptor: (config: AxiosResponse) => AxiosResponse
  responseInterceptorCatch: (error: any) => any
}

interface HYRequestConfig extends AxiosRequestConfig {
  interceptors: HYRequestInterceptors
}

class HYRequest {
  instance: AxiosInstance
  interceptors: HYRequestInterceptors
  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.instance.interceptors.request.use(this.interceptors.requestInterceptor.this.)
  }
  request(config: HYRequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log(res)
    })
  }
  // request() {}
  // get() {}
}
export default HYRequest
