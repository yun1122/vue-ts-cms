<template>
  <div class="page-search">
    <lyfrom v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1>高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button type="success">搜索</el-button>
          <el-button type="success">重置</el-button>
        </div>
      </template>
    </lyfrom>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import Lyfrom from "@/baseui/from"

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    Lyfrom
  },
  setup() {
    const formData = ref({
      id: "",
      name: "",
      password: "",
      sportname: "",
      createTime: ""
    })
    return { formData }
  }
})
</script>

<style scoped>
.handle-btns {
  text-align: right;
  margin: 0 50 80 0;
}
</style>
