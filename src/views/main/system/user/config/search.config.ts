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
      field: "password",
      type: "password",
      label: "密码",
      placeholder: "请输入用户名"
    },
    {
      field: "sportname",
      type: "select",
      label: "选择",
      placeholder: "选择喜欢的运动",
      options: [
        {
          title: "篮球",
          label: "basketball"
        },
        {
          title: "足球",
          label: "football"
        }
      ]
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
