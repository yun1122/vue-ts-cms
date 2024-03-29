import { App } from "vue"
import { formatUtcString } from "@/utils/date-format"

export default function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    foo() {
      console.log("foohanshu")
    },
    formatTime(value: string) {
      return formatUtcString(value)
    }
  }
}
