import axios from 'axios'
import type{}

class HYRequest {
  instance: any
  constructor(config: any) {
    this.instance = axios.create(config)
  }
  // request() {}
  // get() {}
}
export default HYRequest
