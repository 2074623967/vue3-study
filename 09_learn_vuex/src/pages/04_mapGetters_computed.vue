<template>
  <div>
    <hr />
    <h2>总价值: {{$store.getters.totalPrice}}</h2>
    <h2>总价值: {{$store.getters.totalPriceCountGreateN(2)}}</h2>
    <h2>{{ sNameInfo }}</h2>
    <h2>{{ counterInfo}}</h2>
    <!-- <h2>总价值: {{$store.getters.nameInfo}}</h2>
    <h2>总价值: {{$store.getters.counterInfo}}</h2>-->
    <hr />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['nameInfo', 'counterInfo']),
    ...mapGetters({
      sNameInfo: 'nameInfo',
      sAgeInfo: 'counterInfo',
    }),
  },
}
</script>

<style scoped>
</style>