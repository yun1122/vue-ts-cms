import {
  ElButton,
  ElTable,
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge
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
  ElBadge
]

export function registerApp(app: App) {
  for (const component of components) {
    app.component(component.name, component)
  }
}
