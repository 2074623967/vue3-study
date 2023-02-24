import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'

class HYRequest {
  instance: AxiosInstance
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
  }
  request(config: AxiosRequestConfig) {
    this.instance.req
  }
  // request() {}
  // get() {}
}
export default HYRequest
