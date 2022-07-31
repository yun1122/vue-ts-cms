<template>
  <div class="login-phone">
    <el-form label-width="80px" :model="phone" ref="formRef">
      <el-form-item label="账号" prop="name" required="true">
        <el-input v-model="phone.num" />
      </el-form-item>
      <el-form-item label="验证码" prop="password" required="true">
        <div class="get-code">
          <el-input v-model="phone.code" style="width: 60%" />
          <el-button type="primary" class="getphonebtu">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue"

export default defineComponent({
  setup() {
    const phone = reactive({
      num: "",
      code: ""
    })
    return {
      phone
    }
  }
})
</script>

<style>
.getcode {
  display: flex;
}
.getphonebtu {
  margin-left: 8px;
}
</style>
