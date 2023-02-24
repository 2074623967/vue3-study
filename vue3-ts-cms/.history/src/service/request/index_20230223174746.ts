import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { HYRequestInterceptors, HYRequestConfig } from './type'
import { ElLoading } from 'element-plus/lib'
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'
const DEAFULT_LOADING = true
class HYRequest {
  instance: AxiosInstance
  interceptors?: HYRequestInterceptors
  showLoading: boolean
  loading?: LoadingInstance
  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config)
    this.showLoading = config.showLoading ?? DEAFULT_LOADING
    this.interceptors = config.interceptors
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
    //添加所有的实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('所有的实例都有的拦截器:请求拦截成功1')
        this.loading = ElLoading.service({
          lock: DEAFULT_LOADING,
          text: '正在请求数据....',
          background: 'rgba(0, 0, 0, 0.5)'
        })
        return config
      },
      (err) => {
        console.log('所有的实例都有的拦截器:请求拦截失败1')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        console.log('所有的实例都有的拦截器:响应拦截成功1')
        this.loading?.close()
        const data = res.data
        if (data.returnCode === '-1001') {
          console.log('请求失败~, 错误信息')
        } else {
          return data
        }
      },
      (err) => {
        this.loading?.close()
        if (err.response.status === 404) {
          console.log('404的错误~')
        }
        return err
      }
    )
  }
  request(config: HYRequestConfig): void {
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }
    if (config.showLoading === false) {
      this.showLoading = config.showLoading
    }
    this.instance
      .request(config)
      .then((res) => {
        //1.单个
        if (config.interceptors?.responseInterceptor) {
          res = config.interceptors.responseInterceptor(res)
        }
        console.log(res)
        this.showLoading = DEAFULT_LOADING
      })
      .catch((error) => {
        this.showLoading = DEAFULT_LOADING
        return error
      })
  }
  // request() {}
  // get() {}
}
export default HYRequest
