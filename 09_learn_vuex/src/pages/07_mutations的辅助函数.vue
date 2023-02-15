<template>
  <h2>App:{{ $store.state.counter }}</h2>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>
  <button @click="increment_n({n: 10})">+10</button>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import { INCREMENT_N } from '../store/mutation-types'
export default {
  name: 'App',
  components: {},
  methods: {
    methods: {
      ...mapMutations(['increment', 'decrement', INCREMENT_N]),
      ...mapMutations({
        add: 'increment',
      }),
    },
    setup() {
      const storeMutations = mapMutations([
        'increment',
        'decrement',
        INCREMENT_N,
      ])

      return {
        ...storeMutations,
      }
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
