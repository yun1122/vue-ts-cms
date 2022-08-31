<template>
  <div class="content">
    <ly-table :listData="dataList" v-bind="contentTableConfig">
      <!-- header中的插槽 -->
      <template #headerHandler>
        <el-button type="primary" size="medium">新建用户</el-button>
      </template>
      <!-- 列中插槽 -->
      <template #status="scope">
        <el-button :type="scope.row.enable ? 'success' : 'danger'">{{
          scope.row.enable === 1 ? "启用" : "禁用"
        }}</el-button>
      </template>
      <template #createAt="scope">
        <strong>{{ $filters.formatTime(scope.row.createAt) }}</strong>
      </template>
      <template #updateAt="scope">
        <strong>{{ $filters.formatTime(scope.row.updateAt) }}</strong>
      </template>
      <template #handler>
        <div class="handle-btms">
          <el-button size="mini" type="text">编辑</el-button>
          <el-button size="mini" type="text">删除</el-button>
        </div>
      </template>
    </ly-table>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue"

import LyTable from "@/baseui/table"
import { useStore } from "@/store"

export default defineComponent({
  components: {
    LyTable
  },
  props: {
    contentTableConfig: {
      type: Object,
      require: true
    },
    pageName: {
      type: String,
      require: true
    }
  },
  setup(props) {
    const store = useStore()
    store.dispatch("system/getPageListAction", {
      pageName: props.pageName,
      queryInfo: {
        offset: 0,
        size: 15
      }
    })

    const dataList = computed(() => store.getters[`system/pageListData`](props.pageName))
    const userCount = computed(() => store.state.system.userCount)

    return { dataList }
  }
})
</script>

<style scoped>
.content {
  padding: 40px;
  border-top: 5px solid #f5f5f5;
}
</style>
