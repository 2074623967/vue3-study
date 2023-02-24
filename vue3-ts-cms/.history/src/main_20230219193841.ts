import { createApp } from 'vue'
//全局引入
// import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/base.css'

// import {
//   ElButton,
//   ElTable,
//   ElAlert,
//   ElAside,
//   ElAutocomplete,
//   ElAvatar,
//   ElBacktop,
//   ElBadge
// } from 'element-plus'

import App from './App.vue'

import router from './router'
import store from './store'

// const components = [
//   ElButton,
//   ElTable,
//   ElAlert,
//   ElAside,
//   ElAutocomplete,
//   ElAvatar,
//   ElBacktop,
//   ElBadge
// ]
const app = createApp(App)
app.use(router)
app.use(store)
for (const cpn of components) {
  app.component(cpn.name, cpn)
}
// app.use(ElementPlus)
app.mount('#app')
