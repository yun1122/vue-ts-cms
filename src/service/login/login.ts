import jlyRequest from "../index"
import { IAccount, IDataType } from "./type"

enum LoginAPI {
  AccountLogin = "/login",
  LoginUserInfo = "./users/",
  UserMenus = "/role/"
}

export function accountLoginRequest(account: IAccount) {
  return jlyRequest.post({
    url: LoginAPI.AccountLogin,
    data: account
  })
}
export function requestUserInfoById(id: number) {
  return jlyRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id,
    showLoading: false
  })
}

export function requestUserMenus(id: number) {
  return jlyRequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + "/menu"
  })
}
