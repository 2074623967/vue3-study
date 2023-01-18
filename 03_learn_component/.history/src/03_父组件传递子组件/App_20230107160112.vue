<template>
  <div>
    <show-message title="哈哈哈" content="我是哈哈哈" />
     <show-message title="哈哈哈" content="我是哈哈哈" />
  </div>
</template>

<script>
import ShowMessage from './ShowMessage.vue'
export default {
  components: {
    ShowMessage,
  },
  data() {
    return {
      title:'111'
    }
  },
}
</script>

<style scoped>
</style>