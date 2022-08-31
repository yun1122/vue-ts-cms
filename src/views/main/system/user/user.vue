<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />
    <page-content :contentTableConfig="contentTableConfig" pageName="users"></page-content>
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
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    return {
      searchFormConfig,
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
