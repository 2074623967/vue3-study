<template>
  <div id="app">
    <router-view></router-view>
    <!-- <router-link to="/login">登录</router-link>
    <router-link to="/main">首页</router-link>
    <router-view></router-view>
    <br />
    <el-button type="primary">哈哈哈</el-button>-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// import { ElButton } from 'element-plus'

// import 'element-plus/dist/index.css'

export default defineComponent({
  name: 'App',
  props: {
    name: {
      type: String
    }
  }
})
</script>

<style lang="less">
.app {
  height: 100%;
}
</style>
