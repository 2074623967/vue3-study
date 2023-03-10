import { createApp } from 'vue'
import ElementPlus from 'element-plus'

import App from './App.vue'

import router from './router'
import store from './store'

const app

createApp(App).use(store).use(router).mount('#app')
