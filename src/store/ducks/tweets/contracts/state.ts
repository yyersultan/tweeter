export enum LoadingState {
  LOADED = 'LOADED',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER'
}

export enum AddFormState {
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER'
}


export interface ITweet {
  _id: string,
  text: string,
  user: {
    fullName: string,
    username: string,
    avatarUrl: string
  }
}

export interface TweetsState {
  items: Array<ITweet>,
  loadingState: LoadingState,
  addFormState: AddFormState,

}