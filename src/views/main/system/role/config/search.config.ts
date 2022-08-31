import { IForm } from "@/baseui/from"
import { id } from "element-plus/es/locale"
export const searchFormConfig: IForm = {
  labelWidth: "120px",
  itemLayout: {
    padding: "10px 40px"
  },
  colLayout: {
    span: 24
  },
  fromItems: [
    {
      field: "name",
      type: "input",
      label: "用户名",
      placeholder: "请输入用户名"
    },
    {
      field: "intro",
      type: "input",
      label: "权限介绍",
      placeholder: "请输入权限介绍"
    },
    {
      field: "createTime",
      type: "datepicker",
      label: "创建时间",
      placeholder: "请输入用户名",
      otherOptions: {
        startPlaceholder: "开始时间",
        endPlaceholder: "结束时间",
        type: "daterange"
      }
    }
  ]
}
