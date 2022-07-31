<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <!-- 背景图片 -->
  <div class="login"><login-panel></login-panel></div>
</template>

<script>
import loginPanel from "./cpns/login-panel.vue"
export default {
  components: { loginPanel }
}
</script>

<style scoped lang="less">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 80%;
  background: url("../../assets/img/login-bg.svg");
  background-size: contain;
}
</style>
