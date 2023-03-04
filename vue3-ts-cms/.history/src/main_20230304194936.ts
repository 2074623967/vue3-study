import { createApp } from 'vue'

import { globalRegisterApp } from './global'

import 'normalize.css'
import './assets/css/index.less'
//全局引入
// import ElementPlus from 'element-plus'
// 导入基础样式

import hyRequest from './service'

import App from './App.vue'

import router from './router'
import store from './store'
import { setupStore } from './store'

const app = createApp(App)

// globalRegisterApp(app)
app.use(globalRegisterApp)
app.use(store)
setupStore()
app.use(router)


app.config.globalProperties.$filters={
  formatTime(value)
}

// app.use(ElementPlus)
app.mount('#app')

// console.log(process.env.VUE_APP_BASE_URL)

// interface DataType {
//   data: any
//   returnCode: string
//   success: boolean
// }

// hyRequest
//   .request<DataType>({
//     url: '/home/multidata',
//     method: 'GET'
//   })
//   .then((res) => {
//     console.log(res)
//   })
