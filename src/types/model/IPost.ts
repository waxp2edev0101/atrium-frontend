import type { IComment } from './IComment'
import type { IFile } from './IFile'
import type { IUser } from './IUser'
export interface IPost {
  _id: string
  title: string
  body: string
  // media: string
  media: string | IFile
  // author: string //object id - user
  author: IUser
  comments: IComment[]
  createdAt: string
  updatedAt: string
}
