<template>
  <div class="nav-menu">
    <div class="logo">
      <img src="@/assets/img/logo.svg" alt="" style="width: 46px" />
      <span>后台管理</span>
    </div>
    <el-menu
      :default-active="defaultValue"
      text-color="#fff"
      background-color="#001529"
      class="el-menu-vertical-demo"
      :collapse="collapse"
    >
      <!-- 一级菜单 -->
      <template v-for="item in userMenus" :key="item.id">
        <template v-if="item.type === 1">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon><location /></el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item :index="subitem.id + ''" @click="handleMenuItemClick(subitem)">{{
                subitem.name
              }}</el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue"
import { useStore } from "vuex"
import { useRoute, useRouter } from "vue-router"
import { pathToMenu } from "@/utils/map-menus"

export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const store = useStore()
    const userMenus = computed(() => store.state.login.userMenus)

    const router = useRouter()
    const route = useRoute()
    const currentPath = route.path

    const menu = pathToMenu(userMenus.value, currentPath)
    const defaultValue = ref(menu.id + "")

    const handleMenuItemClick = (item: any) => {
      router.push({
        path: item.url ?? "/not-found"
      })
    }
    return { userMenus, handleMenuItemClick, defaultValue }
  }
})
</script>

<style lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;
  .el-menu-vertical-demo {
    background-color: #001529;
  }
  .logo {
    display: flex;
    height: 28px;
    width: 100%;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      width: 80px;
      background-size: contain;
      height: 80px;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }
}
</style>
