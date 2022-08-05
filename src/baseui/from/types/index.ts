type IFromType = "input" | "password" | "select" | "datepicker"

export interface IFromItem {
  field: string
  type?: IFromType
  label: any
  rules?: any
  placeholder?: any
  options?: any[]
  otherOptions?: any
}
export interface IForm {
  fromItems: IFromItem[]
  labelWidth?: string
  colLayout?: any
  itemLayout?: any
}
