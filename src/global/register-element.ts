import "element-plus/dist/index.css"
import { App } from "vue"
import {
  ElButton,
  ElTable,
  ElTableColumn,
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
  ElBreadcrumbItem,
  ElCascader,
  ElPagination,
  ElConfigProvider
} from "element-plus"

const components = [
  ElButton,
  ElTable,
  ElTableColumn,
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
  ElBreadcrumbItem,
  ElCascader,
  ElPagination,
  ElConfigProvider
]

export default function registerApp(app: App) {
  for (const component of components) {
    app.component(component.name, component)
  }
}
