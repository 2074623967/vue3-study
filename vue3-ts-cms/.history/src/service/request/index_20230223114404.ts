import axios from 'axios'
import type { AxiosInstance } from 'axios'
import HYRequestConfig from '.'
class HYRequest {
  instance: AxiosInstance
  interceptors?: HYRequestInterceptors
  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
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