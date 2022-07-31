<template>
  <div class="user">
    <lyfrom v-bind="searchFormConfig"></lyfrom>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import Lyfrom from "@/baseui/from"
import { searchFormConfig } from "./config/search.config"

export default defineComponent({
  components: {
    Lyfrom
  },
  setup() {
    return { searchFormConfig }
  }
})
</script>

<style scoped></style>
