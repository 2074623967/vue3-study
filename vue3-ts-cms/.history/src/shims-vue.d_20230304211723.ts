/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare let $store: any

declare const VUE_APP_BASE_NAME: string

declare module 'element-plus/dist/locale/zh-cn.mjs'
