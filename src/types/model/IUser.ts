import type { ICommunity, ICommunityMember, IPost, IFriend, ITag } from '.'
export interface IUser {
  _id: string
  accountId: string
  username: string
  avatar: string
  skin: string
  bio: string
  websiteUrl: string
  isWebsiteUrlDOP: boolean
  email: string
  isEmailNotification: boolean
  discord: string
  isDiscordDOP: boolean
  twitter: string
  isTwitterDOP: boolean
  instagram: string
  isInstagramDOP: boolean
  isPrivate: boolean
  blurp: string
  friends: IFriend[]
  posts: IPost[]
  ownedCommunities: ICommunity[]
  joinedCommunities: ICommunityMember[]
  favoriteCommunities: ICommunity[]
  featuredPost: IPost[]
  tags: ITag[]
  webUrl: string
}
