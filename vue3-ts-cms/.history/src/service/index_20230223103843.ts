//service统一出口
import HYRequest from './request'
import {BASE_URL, TIME_OUT}

const hyRequest = new HYRequest({
  baseURL: '1',
  timeout: 100
})

const hyRequest2 = new HYRequest({
  baseURL: '1',
  timeout: 100
})

export default hyRequest
