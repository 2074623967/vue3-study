<template>
  <div>
    <h2>Home:{{ $store.state.counter }}</h2>
    <h2>Home:{{ getName}}</h2>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Home',
  computed: {
    getName() {
      return $store.state.name
    },
    //其他的计算属性，从state获取
    //...mapState(["name","counter"])
    ...mapState({
      getCounter: (state) => state.counter,
      getName: (state) => state.name,
    }),
  },
}
</script>

<style scoped>
</style>