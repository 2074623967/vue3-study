import { ILoginState } from './login/types'

export interface IRootState {
  name: string
  age: number
}

export interface IRootWithModule {
  login: ILoginState,
  system: ISystemState
}

export type IStoreType = IRootState & IRootWithModule
