import { createApp } from 'vue'

import { globalRegisterApp } from './global'
//全局引入
// import ElementPlus from 'element-plus'
// 导入基础样式

import hyRequest from './service'

import App from './App.vue'

import router from './router'
import store from './store'

const app = createApp(App)

// globalRegisterApp(app)
app.use(globalRegisterApp)

app.use(router)
app.use(store)

// app.use(ElementPlus)
app.mount('#app')

console.log(process.env.VUE_APP_BASE_URL)
hyRequest.request({
  url: '66666',
  method: ''
})
