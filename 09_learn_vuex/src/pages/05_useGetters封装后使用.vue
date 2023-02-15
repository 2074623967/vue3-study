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
import { useGetters } from '../hooks/useGetters'
export default {
  setup() {
    const storeState = useGetters(['nameInfo', 'counterInfo'])
    const storeState2 = useGetters({
      sAgeInfo: (state) => state.counterInfo,
      sNameInfo: (state) => state.nameInfo,
    })

    return {
      ...storeState,
      ...storeState2,
    }
  },
}
</script>

<style scoped>
</style>