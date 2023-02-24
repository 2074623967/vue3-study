import axios from 'axios'
import 

class HYRequest {
  instance: any
  constructor(config: any) {
    this.instance = axios.create(config)
  }
  // request() {}
  // get() {}
}
export default HYRequest
