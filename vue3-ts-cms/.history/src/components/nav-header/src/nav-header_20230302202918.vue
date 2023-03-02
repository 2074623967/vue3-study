<template>
  <div class="nav-header">
    <el-icon v-if="isFold">
      <i class="fold-menu" @click="handleFoldClick">
        <Expand />
      </i>
    </el-icon>
    <el-icon v-else>
      <i class="fold-menu" @click="handleFoldClick">
        <Fold />
      </i>
    </el-icon>
    <div class="content">
      <nav-breadcrumb />
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import UserInfo from './user-info.vue'
import HyBreadcrumb from ''

export default defineComponent({
  components: {
    UserInfo,
    NavBreadcrumb
  },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    return {
      isFold,
      handleFoldClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;

  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
