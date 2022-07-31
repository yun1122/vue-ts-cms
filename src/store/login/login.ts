import { Module } from "vuex"
import { ILoginState } from "./type"
import { IRootState } from "../type"
import { accountLoginRequest, requestUserInfoById, requestUserMenus } from "@/service/login/login"
import { IAccount } from "@/service/login/type"
import LocalCache from "@/utils/cache"
import router from "@/router"
import { mapMenusToRoutes } from "@/utils/map-menus"

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: {},
      userMenus: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenu(state, userMenu: any) {
      state.userMenus = userMenu
      console.log("1111111" + userMenu)
      const routes = mapMenusToRoutes(userMenu)
      routes.forEach((route) => {
        router.addRoute("main", route)
      })
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      console.log("打印loginvuex", payload)
      // 实现登录逻辑
      const loginResult: any = await accountLoginRequest(payload)

      const { id, token } = loginResult.data.data
      // console.log(token)
      LocalCache.setCache("token", token)
      commit("changeToken", token)
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit("changeUserInfo", userInfo.data)
      LocalCache.setCache("userInfo", userInfo.data)

      //获取菜单
      const userMenu = await requestUserMenus(userInfo.data.role.id)
      commit("changeUserMenu", userMenu.data.data)
      LocalCache.setCache("userMenus", userMenu.data.data)
      // 登录成功跳转到首页
      router.push("/main")
    },
    loadLocalLogin({ commit }) {
      const token = LocalCache.getCache("token")
      if (token) {
        commit("changeToken", token)
      }
      const userInfo = LocalCache.getCache("userInfo")
      if (userInfo) {
        commit("changeUserInfo", userInfo)
      }
      const userMenu = LocalCache.getCache("userMenus")
      if (userMenu) {
        commit("changeUserMenu", userMenu)
      }
    }
  }
}

export default loginModule
