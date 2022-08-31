<template>
  <div class="role">
    <page-search :searchFormConfig="searchFormConfig" />
    <page-content :contentTableConfig="contentTableConfig" pageName="role"></page-content>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue"
import { useStore } from "@/store"

import { searchFormConfig } from "./config/search.config"
import { contentTableConfig } from "./config/content.config"
import PageSearch from "@/components/page-search"
import PageContent from "@/components/page-content"

export default defineComponent({
  name: "role",
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    const store = useStore()
    store.dispatch("system/getPageListAction", {
      pageUrl: "/users/list",
      queryInfo: {
        offset: 0,
        size: 15
      }
    })

    const userList = computed(() => store.state.system.userList)
    const userCount = computed(() => store.state.system.userCount)

    return {
      searchFormConfig,
      userList,
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
