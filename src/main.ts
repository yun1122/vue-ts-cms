import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import { globalRegister } from "./global"
import "normalize.css"
import "./assets/css/index.less"
import * as ElementPlusIconsVue from "@element-plus/icons-vue"
import { setupStore } from "./store"

const app = createApp(App)
setupStore()
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
globalRegister(app)
app.use(router)
app.use(store)

app.mount("#app")

// console.log(process.env.VUE_APP_BASE_URL)

// interface DataType {
//   data: any
//   returnCode: string
//   success: boolean
// }

// jlyRequest
//   .request<DataType>({
//     url: "home/mltidata",
//     method: "GET",
//     showLoading: true,
//     interceptors: {
//       requestInterceptor: (config) => {
//         console.log("单独请求的config")
//         return config
//       }
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//     console.log(res.returnCode)
//     console.log(res.success)
//   })
