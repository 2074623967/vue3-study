<template>
  <h2>App:{{ $store.state.counter }}</h2>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>
  <button @click="addT">111</button>
</template>

<script>
import { INCREMENT_N } from './store/mutation-types'
export default {
  name: 'App',
  components: {},
  methods: {
    increment() {
      this.$store.commit('increment')
    },
    decrement() {
      this.$store.commit('decrement')
    },
    addT() {
      // this.$store.commit('decrement', 10)
      // this.$store.commit('decrement', { n: 10, name: 'why' })
      //另外一种提交风格
      this.$store.commit({
        type: INCREMENT_N,
        n: 10,
      })
    },
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
