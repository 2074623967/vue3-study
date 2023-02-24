//service统一出口
import HYRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
import { AxiosHeaders } from 'axios'

const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export default hyRequest
