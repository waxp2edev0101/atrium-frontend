import type { ICommunity, IUser } from './'

export interface ICommunityMember {
  _id: string
  community: ICommunity | string
  member: IUser
  status: boolean
  createdAt: string
  updatedAt: string
}
