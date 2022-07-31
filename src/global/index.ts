import {
  ElButton,
  ElTable,
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge,
  ElTabs,
  ElTabPane,
  ElInput,
  ElForm,
  ElFormItem,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElHeader,
  ElMain,
  ElMenu,
  ElMenuItemGroup,
  ElMenuItem,
  ElSubMenu,
  ElIcon,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElSelect,
  ElOption,
  ElRow,
  ElDatePicker,
  ElBreadcrumb,
  ElBreadcrumbItem
} from "element-plus"

import "element-plus/dist/index.css"
import { App } from "vue"

const components = [
  ElButton,
  ElTable,
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge,
  ElTabs,
  ElTabPane,
  ElInput,
  ElForm,
  ElFormItem,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElHeader,
  ElMain,
  ElMenu,
  ElMenuItemGroup,
  ElMenuItem,
  ElSubMenu,
  ElIcon,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElSelect,
  ElOption,
  ElRow,
  ElRow,
  ElDatePicker,
  ElBreadcrumb,
  ElBreadcrumbItem
]

export function registerApp(app: App) {
  for (const component of components) {
    app.component(component.name, component)
  }
}
