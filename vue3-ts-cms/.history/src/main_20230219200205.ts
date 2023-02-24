import { createApp } from 'vue'
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
  ElBadge,
} from 'element-plus'
————————————————
版权声明：本文为CSDN博主「YanzYan」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/YanzYan/article/details/123634849

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
