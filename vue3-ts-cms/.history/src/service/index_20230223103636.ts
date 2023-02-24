//service统一出口
import HYRequest from './request'

const hyRequest = new HYRequest({
  baseUrl: '1',
  timeout: 100
})

const hyRequest2 = new HYRequest('1')

export default hyRequest
