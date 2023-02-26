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
  components: {
    // ElButton
  }
})
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
