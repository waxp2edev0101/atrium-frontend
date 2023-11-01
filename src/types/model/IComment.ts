import type { IUser } from './IUser'

export interface IComment {
  _id: string
  body: string
  author: IUser
  createdAt: string
  updatedAt: string
}
