// 配置文件配置表格
export const contentTableConfig = {
  title: "用户列表",
  propList: [
    {
      prop: "name",
      label: "角色名",
      minWidth: "100"
    },
    {
      prop: "intro",
      label: "权限介绍",
      minWidth: "100"
    },
    {
      prop: "createAt",
      label: "创建时间",
      minWidth: "200",
      slotName: "createAt"
    },
    {
      label: "操作",
      minWidth: "200",
      slotName: "handler"
    }
  ],
  showIndexColumn: true,
  showSelectColumn: true
}
