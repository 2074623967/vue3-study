import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

interface HYRequestInterceptors {
  requestInterceptor: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch: (error: any) => any
  responseInterceptor: (config: AxiosResponse) => AxiosResponse
  responseInterceptorCatch: (error: any) => any
}

interface HYRequestConfig  extends AxiosRequestConfig {}

class HYRequest {
  instance: AxiosInstance
  constructor(config: HYRequestConfig ) {
    this.instance = axios.create(config)
    this.instance.interceptors.request.use(requestInterceptor)
  }
  request(config: HYRequestConfig ): void {
    this.instance.request(config).then((res) => {
      console.log(res)
    })
  }
  // request() {}
  // get() {}
}
export default HYRequest
