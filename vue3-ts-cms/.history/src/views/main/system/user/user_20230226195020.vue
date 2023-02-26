<template>
  <div class="user">
    <div class="search">
      <el-form label-width="100px">
        <el-row>
          <el-col :span="6">
            <el-form-item label="用户名">
              <el-input placeholder="请输入用户名" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="密码">
              <el-input placeholder="请输入密码" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="你喜欢的运动">
              <el-input placeholder="请输入你喜欢的运动" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="创建时间">
              <el-input />
            </el-form-item>
          </el-col>
        </el-row>
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
