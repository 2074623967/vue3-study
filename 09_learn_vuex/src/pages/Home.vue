<template>
  <h2>root: {{$store.state.rootCounter}}</h2>
  <h2>user: {{$store.home.homeCounter}}</h2>
  <h2>home: {{$store.user.userCounter}}</h2>
  <hr />

  <h2>{{$store.getters["home/doubleHomeCounter"]}}</h2>
  <button @click="homeIncrement">home+1</button>
  <button @click="homeIncrementAction">home+1</button>
</template>

<script>
import {
  createNamespacedHelpers,
  mapState,
  mapGetters,
  mapMutations,
  mapActions,
} from 'vuex'

import { useState, useGetters } from '../hooks/index'
// const { mapState, mapGetters, mapMutations, mapActions } =createNamespacedHelpers('home')
export default {
  name: 'App',
  components: {
    // 1.写法一:
    // ...mapState({
    //   homeCounter: state => state.home.homeCounter
    // }),
    // ...mapGetters({
    //   doubleHomeCounter: "home/doubleHomeCounter"
    // })
    // 2.写法二:
    // ...mapState("home", ["homeCounter"]),
    // ...mapGetters("home", ["doubleHomeCounter"])
    // 3.写法三:
    // ...mapState(["homeCounter"]),
    // ...mapGetters(["doubleHomeCounter"])
  },
  methods: {
    // 1.写法一:
    // ...mapMutations({
    //   increment: "home/increment"
    // }),
    // ...mapActions({
    //   incrementAction: "home/incrementAction"
    // }),
    // 2.写法二
    // ...mapMutations("home", ["increment"]),
    // ...mapActions("home", ["incrementAction"]),
    // 3.写法三:
    // ...mapMutations(["increment"]),
    // ...mapActions(["incrementAction"]),
  },
  setup() {
    // {homeCounter: function}
    // const state = useState(["rootCounter"])
    // const rootGetters = useGetters(["doubleRootCounter"])
    // const getters = useGetters("home", ["doubleHomeCounter"])

    // const mutations = mapMutations(["increment"])
    // const actions = mapActions(["incrementAction"])

    return {
      // ...state,
      // ...getters,
      // ...rootGetters
      // ...mutations,
      // ...actions
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
