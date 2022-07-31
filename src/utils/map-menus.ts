import { IBreadcrumb } from "@/baseui/breadcrumb"
import user from "@/router/main/system/user/user"
import { RouteRecordRaw } from "vue-router"

let firstMenu: any = null

export function mapMenusToRoutes(userMenus: any): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []
  // 加载所有路由
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context("../router/main", true, /\.ts/)
  routeFiles.keys().forEach((key) => {
    console.log(key)
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const route = require("../router/main" + key.split(".")[1])
    allRoutes.push(route.default)
  })
  // 根据菜单获取需要添加的路由

  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
        if (!firstMenu) {
          firstMenu = menu
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }
  _recurseGetRoute(userMenus)

  return routes
}

export function pathToMenu(
  userMenus: any[],
  currentPath: string,
  breadcrumbs?: IBreadcrumb[]
): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        breadcrumbs?.push({ name: menu.name })
        breadcrumbs?.push({ name: findMenu.name })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

export function pathMapBreadcrumbs(userMenus: any[], currentPath: string) {
  const breadcrumbs: IBreadcrumb[] = []
  pathToMenu(userMenus, currentPath, breadcrumbs)
  return breadcrumbs
}
// export function pathMapBreadcrumbs(userMenus: any[], currentPath: string) {
//   const breadcrumb: IBreadcrumb[] = []
//   for (const menu of userMenus) {
//     if (menu.type === 1) {
//       const findMenu = pathToMenu(menu.children ?? [], currentPath)
//       if (findMenu) {
//         breadcrumb.push({ name: menu.name, path: menu.url })
//         breadcrumb.push({ name: findMenu.name, path: findMenu.url })
//         return findMenu
//       }
//     } else if (menu.type === 2 && menu.url === currentPath) {
//       return menu
//     }
//   }
//   return breadcrumb
// }

export { firstMenu }
