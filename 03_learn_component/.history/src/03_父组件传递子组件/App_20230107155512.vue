<template>
  <div>
    <show-message title="哈哈哈" :content="我是"/>
  </div>
</template>

<script>
import ShowMessage from './ShowMessage.vue'
export default {
  components: {
    ShowMessage,
  },
}
</script>

<style scoped>
</style>