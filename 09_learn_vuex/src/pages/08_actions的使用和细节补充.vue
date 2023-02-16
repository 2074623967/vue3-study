<template>
  <h2>App:{{ $store.state.counter }}</h2>
  <button @click="increment">+1</button>
  <button @click="decrement">+1</button>
</template>

<script>
import { onMounted } from 'vue'
export default {
  name: 'App',
  components: {},
  methods: {
    increment() {
      setTimeout(() => {
        this.$store.dispatch('incrementAction')
      }, 1000)
    },
    decrement() {
      // this.$store.dispatch('decrementAction')
      //3.对象类型派发
      this.$store.dispatch({
        type: 'decrementAction',
      })
    },
  },
  setup() {},
  onMounted() {
    this.$store.dispatch('getHomeMultidata')
  },
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
</style>
