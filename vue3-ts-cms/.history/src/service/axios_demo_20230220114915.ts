import axios from 'axios'

//axios的实例对象
//1.模拟get请求
// axios.get('http://123/207.32.32:8000/home/multidata').then((res) => {
//   console.log(res)
// })

//4.axios的配置选项
axios.defaults.baseURL='http://httpbin.org/get'

//2.模拟get请求携带参数
axios
  .get('http://httpbin.org/get', {
    params: {
      name: 'coderwhy',
      age: 18
    }
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
