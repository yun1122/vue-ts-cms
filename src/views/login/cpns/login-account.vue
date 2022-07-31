<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name" required="true">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password" required="true">
        <el-input show-password v-model="account.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "@vue/runtime-core"
import { rules } from "../config/account-config"
import { ElForm } from "element-plus"
import LocalCache from "@/utils/cache"
import { useStore } from "vuex"

export default defineComponent({
  setup() {
    const store = useStore()
    const account = reactive({
      name: "",
      password: ""
    })
    const formRef = ref()
    const loginAction = (iskeeppassword: boolean) => {
      console.log("获取表单密码", formRef.value)
      formRef.value?.validate((validate: any) => {
        console.log("验证通过")
        if (validate) {
          // 验证登录
          // 是否需要记住密码
          if (iskeeppassword) {
            // 本地缓存
            LocalCache.setCache("name", account.name)
            LocalCache.setCache("password", account.password)
          } else {
            LocalCache.deleteCache("name")
            LocalCache.deleteCache("password")
          }
          store.dispatch("login/accountLoginAction", { ...account })
        } else {
          // 返回失败
        }
      })
    }
    return { account, rules, formRef, loginAction }
  }
})
</script>
<style lang="less"></style>
