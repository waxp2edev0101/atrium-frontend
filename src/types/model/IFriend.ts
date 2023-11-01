import type { IUser } from './IUser'

export interface IFriend {
  _id: string
  // requester: string //id
  // requester: IUser
  // // recipient: string //id
  // recipient: IUser
  status: number
  // createdAt: string
  // updatedAt: string
  user: IUser
}
