<template>
  <h2>App:{{ $store.state.counter }}</h2>
  <button @click="incrementAction">+1</button>
  <button @click="decrement">+1</button>
  <button @click="add">+1</button>
  <button @click="sub">+1</button>
</template>

<script>
export default {
  name: 'App',
  components: {},
  methods: {
    // ...mapActions(["incrementAction", "decrementAction"]),
    // ...mapActions({
    //   add: "incrementAction",
    //   sub: "decrementAction"
    // })
  },
  setup() {
    const actions = mapActions(['incrementAction', 'decrementAction'])
    const actions2 = mapActions({
      add: 'incrementAction',
      sub: 'decrementAction',
    })

    return {
      ...actions,
      ...actions2,
    }
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
