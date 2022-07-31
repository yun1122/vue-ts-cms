<template>
  <div class="ly-from">
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in fromItems" :key="item.label">
          <el-col :span="8">
            <el-form-item :label="item.label" :rules="item.rules" :style="itemStyle">
              <template v-if="item.type === 'input' || item.type === 'password'">
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                ></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select :placeholder="item.placeholder">
                  <el-option v-for="option in item.options" :key="option.label">{{
                    option.title
                  }}</el-option>
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker v-bind="item.otherOptions"></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { reduce } from "lodash"
import { defineComponent, PropType } from "vue"
import { IFromItem } from "../types"

export default defineComponent({
  props: {
    fromItems: {
      type: Array as PropType<IFromItem[]>,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: "300px"
    },
    itemStyle: {
      type: Object,
      default: () => ({
        padding: "10px 30px"
      })
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6,
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
