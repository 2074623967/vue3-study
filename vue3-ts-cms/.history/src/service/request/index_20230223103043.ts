import { createApp } from 'vue';
import axios from 'axios'

class HYRequest {
  instance:any
  constructor(config:any){
  this.instance=axios.create(config)}
  // request() {}
  // get() {}
}
export default HYRequest
