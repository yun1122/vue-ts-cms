import { Store } from "element-plus/es/components/table/src/store"
import { createStore, useStore as vuexUserStore } from "vuex"
import login from "./login/login"
import { IRootState, IStoreType } from "./type"

const store = createStore<IRootState>({
  state() {
    return { name: "coderwhy", age: 18 }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login
  }
})
export function setupStore() {
  store.dispatch("login/loadLocalLogin")
}

export function useStore(): Store<IStoreType> {
  return vuexUserStore()
}
export default store
