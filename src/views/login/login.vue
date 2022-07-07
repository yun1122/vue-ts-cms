<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    登录
    <el-alert title="success alert" type="success" />
    <el-alert title="info alert" type="info" />
    <el-alert title="warning alert" type="warning" />
    <el-alert title="error alert" type="error" />
  </div>
</template>

<script>
export default {}
</script>

<style>
.el-alert {
  margin: 20px 0 0;
}
.el-alert:first-child {
  margin: 0;
}
</style>
