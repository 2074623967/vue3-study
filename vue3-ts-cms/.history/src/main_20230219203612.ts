import { createApp } from 'vue'

import {} from './global'
//全局引入
// import ElementPlus from 'element-plus'
// 导入基础样式
import 'element-plus/theme-chalk/base.css'
import {
  ElButton,
  ElTable,
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge
} from 'element-plus'

const components = [
  ElButton,
  ElTable,
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge
]

import App from './App.vue'

import router from './router'
import store from './store'

const app = createApp(App)
app.use(router)
app.use(store)
for (const cpn of components) {
  app.component(cpn.name, cpn)
}
// app.use(ElementPlus)
app.mount('#app')
