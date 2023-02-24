import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'

interface HYRequestInterceptors{
  requestInterceptor:(config:AxiosRequestConfig)
}

class HYRequest {
  instance: AxiosInstance
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
    this.instance.interceptors.request.use(requestInterceptor)
  }
  request(config: AxiosRequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log(res)
    })
  }
  // request() {}
  // get() {}
}
export default HYRequest
