<template>
  <div class="user">
    <div class="search">
      <el-form label-width="100px">
        <el-row>
          <el-col :span="8">
            <el-form-item label="用户名">
              <el-input placeholder="请输入用户名" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="密码">
              <el-input placeholder="请输入密码" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="喜欢的运动">
              <el-select v-model="model" placeholder="">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
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
    return {
     let options=[
     ]
    }
  }
})
</script>

<style scoped></style>
