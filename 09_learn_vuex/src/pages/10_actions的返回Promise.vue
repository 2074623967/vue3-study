<template>
  <h2>App:{{ $store.state.counter }}</h2>
</template>

<script>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'App',
  components: {},
  methods: {},
  setup() {},
  onMounted() {
    const promise = this.$store.dispatch('getHomeMultidata')
    promise
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
          console.log(res)
      })
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
