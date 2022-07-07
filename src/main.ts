import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import { registerApp } from "./global"
import jlyRequest from "./service"

const app = createApp(App)

registerApp(app)
app.use(router)
app.use(store)
app.mount("#app")

console.log(process.env.VUE_APP_BASE_URL)

interface DataType {
  data: any
  returnCode: string
  success: boolean
}

jlyRequest
  .request<DataType>({
    url: "home/mltidata",
    method: "GET",
    showLoading: true,
    interceptors: {
      requestInterceptor: (config) => {
        console.log("单独请求的config")
        return config
      }
    }
  })
  .then((res) => {
    console.log(res.data)
    console.log(res.returnCode)
    console.log(res.success)
  })
