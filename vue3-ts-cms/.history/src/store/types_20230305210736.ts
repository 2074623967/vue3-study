import { ILoginState } from './login/types'
import { ISystemState } from './main/system/types'

export interface IRootState {
  name: string
  age: number
  entireDepartment: Array,
  entireRole: Array
}

export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
}

export type IStoreType = IRootState & IRootWithModule
