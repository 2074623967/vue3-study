<template>
  <div class="app">
    <p>
      <!-- props: href 跳转的链接 -->
      <!-- props: route对象 -->
      <!-- props: navigate导航函数 -->
      <!-- props: isActive 是否当前处于活跃的状态 -->
      <!-- props: isExactActive 是否当前处于精确的活跃状态 -->
      <!--custom表示自定义元素,原本的a元素不见了 -->
      <router-link to="/home" v-slot="props" custom>
        <NavBar title="title" />
        <button @click="props.navigate">{{props.href}}</button>
        <button @click="props.navigate">哈哈哈</button>
        <span :class="{'active': props.isActive}">{{props.isActive}}</span>
        <span :class="{'active': props.isActive}">{{props.isExactActive}}</span>
        <!-- <p>{{props.route}}</p> -->
      </router-link>
      <router-link to="/about">关于</router-link>
      <router-link to="/user/123/info/why">用户</router-link>
    </p>
    <router-view v-slot="props">
      <transition name="why">
        <keep-alive>
          <component :is="props.Component"></component>
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
  name: 'App',
  components: { NavBar },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.why-enter-from,
.why-leave-to {
  opacity: 0;
}

.why-enter-active,
.why-leave-active {
  transition: opacity 1s ease;
}
</style>
