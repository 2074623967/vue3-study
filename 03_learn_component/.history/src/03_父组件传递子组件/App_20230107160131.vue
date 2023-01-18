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
      message{
 title:'111',
      content:'2222'
      }
     
    }
  },
}
</script>

<style scoped>
</style>