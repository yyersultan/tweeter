export interface TweetProps {
  _id: string,
  text: string,
  user: {
    avatarUrl: string,
    fullName: string,
    username: string
  },
}