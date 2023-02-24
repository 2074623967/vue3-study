import axios from 'axios'
import type { AxiosInstance,AxiosRequestConfig} from 'axios'

class HYRequest {
  instance: AxiosInstance
  constructor(config: any) {
    this.instance = axios.create(config)
  }
  // request() {}
  // get() {}
}
export default HYRequest
