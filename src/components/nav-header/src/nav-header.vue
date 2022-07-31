<template>
  <div class="nav-header">
    <el-icon :size="30" @click="handleFoldClick" class="fold-menu"
      ><template v-if="isFold"><Expand /></template> <template v-else><Fold /></template
    ></el-icon>
    <div class="content">
      <LyBreadcrumb :breadcrumbs="breadcrumbs"></LyBreadcrumb>
      <user-info></user-info>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue"
import userInfo from "./user-info.vue"
import LyBreadcrumb, { IBreadcrumb } from "@/baseui/breadcrumb/index"
import { pathMapBreadcrumbs } from "@/utils/map-menus"
import { useStore } from "vuex"
import { useRoute } from "vue-router"

export default defineComponent({
  components: { userInfo, LyBreadcrumb },
  emits: ["foldChange"],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit("foldChange", isFold.value)
    }
    const store = useStore()
    // 面包屑数据
    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenus
      const route = useRoute()
      const currentPath = route.path
      return pathMapBreadcrumbs(userMenus, currentPath)
    })
    return { isFold, handleFoldClick, breadcrumbs }
  }
})
</script>

<style scoped>
.nav-header {
  display: flex;
  width: 100%;
}
.fold-menu {
  font-size: 30px;
  cursor: pointer;
}
.content {
  content: 1;
  display: flex;
  padding: 5px;
  flex: 1;
  justify-content: space-between;
  align-items: center;
}
</style>
