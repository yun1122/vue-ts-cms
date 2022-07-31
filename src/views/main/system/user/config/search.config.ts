import { IForm } from "@/baseui/from"
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
      type: "input",
      label: "用户名",
      placeholder: "请输入用户名"
    },
    {
      type: "password",
      label: "密码",
      placeholder: "请输入用户名"
    },
    {
      type: "select",
      label: "时间",
      placeholder: "请输入用户名",
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
