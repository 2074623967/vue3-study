<template>
  <h2>root: {{$store.state.rootCounter}}</h2>
  <h2>user: {{$store.home.homeCounter}}</h2>
  <h2>home: {{$store.user.userCounter}}</h2>
  <hr/>

  <h2>{{$store.getters["home/doubleHomeCounter"]}}</h2>
  <button @click="homeIncrement">home+1</button>
  <button @click="homeIncrementAction">home+1</button>
</template>

<script>
export default {
  name: 'App',
  components: {},
  methods: {
    homeIncrement() {
      this.$store.commit('home/increment')
    },
    homeIncrementActiont() {
      this.$store.dispatch('home/incrementAction')
    },
  },
  setup() {},
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
