import axios from 'axios'

//axios的实例对象
//1.模拟get请求
// axios.get('http://123/207.32.32:8000/home/multidata').then((res) => {
//   console.log(res)
// })

//4.axios的配置选项
//4.1全局配置
axios.defaults.baseURL = 'http://httpbin.org'
axios.defaults.timeout = 1000

//2.模拟get请求携带参数
axios
  .get('/get', {
    params: {
      name: 'coderwhy',
      age: 18
    },
    //4.2局部配置
    timeout: 5000,
    headers: {}
  })
  .then((res) => {
    console.log(res)
  })

//额外补充Promise中类型的使用
//Promise本身可以有类型
// new Promise<string>((resolve, reject) => {
//   resolve('123')
// }).then((res) => {
//   console.log(res.length)
// })

//5.axios.all  -> 多个请求,一起返回
axios.all([
  axios.get('/get', {
    params: {
      name: 'coderwhy',
      age: 18
    },
    //4.2局部配置
    timeout: 5000,
    headers: {}
  }),
  axios.get('/get', {
    params: {
      name: 'coderwhy',
      age: 18
    },
    //4.2局部配置
    timeout: 5000,
    headers: {}
  })
])
