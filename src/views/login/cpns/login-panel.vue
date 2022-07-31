<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch="true">
      <el-tab-pane>
        <template #label>
          <span><i class="el-icon-user-solid"></i> 账号登录</span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span><i class="el-icon-mobile-phone"></i> 手机登录</span>
        </template>
        <login-phone />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="iskeeppassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button size="large" type="primary" @click="handleLoginClick">立即登录</el-button>
  </div>
</template>

<script lang="ts">
import { validate } from "@babel/types"
import { defineComponent, ref } from "vue"
import loginAccount from "./login-account.vue"
import LoginPhone from "./login-phone.vue"

export default defineComponent({
  components: { loginAccount, LoginPhone },
  setup() {
    const iskeeppassword = ref(true)
    const accountRef = ref<InstanceType<typeof loginAccount>>()
    const handleLoginClick = () => {
      // console.log("立即登录", accountRef.value)
      accountRef.value?.loginAction(iskeeppassword.value)
    }
    return { iskeeppassword, handleLoginClick, accountRef }
  }
})
</script>

<style scoped lang="less">
.login-panel {
  margin-bottom: 200px;
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
  vertical-align: small;
  margin-left: 4px;
}
.account-control {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
</style>
