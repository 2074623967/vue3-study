import axios from 'axios'

//axios的实例对象
//1.模拟get请求
axios.get('http://123/207.32.32:8000/home/multidata').then((res) => {
  console.log(res)
})
//2.模拟get请求携带参数
axios.get('http://123/207.32.32:8000/home/multidata').then((res) => {
  console.log(res)
})
//Promise本身可以有类型
// new Promise<string>((resolve, reject) => {
//   resolve('123')
// }).then((res) => {
//   console.log(res.length)
// })
