<template>
  <div class="user">
    <div class="search">
      <el-form label-width="100px">
        <el-form-item label="用户名">
          <el-input p/>
        </el-form-item>
        <el-form-item label="密码">
          <el-input />
        </el-form-item>
        <el-form-item label="你喜欢的运动">
          <el-input />
        </el-form-item>
        <el-form-item label="创建时间">
          <el-input />
        </el-form-item>
      </el-form>
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'user',
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
