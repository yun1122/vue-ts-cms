import jlyRequest from "../../index"
import { IDataType } from "../../types"

export function getPageListData(url: string, queryInfo: any) {
  return jlyRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}
