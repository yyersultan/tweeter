import { Action } from "redux"
import { AddFormState, ITweet, LoadingState, TweetsState } from "./contracts/state"

export enum TweetsActionTypes {
  SET_TWEETS = 'tweets/SET_TWEETS',
  FETCH_TWEETS = 'tweets/FETCH_TWEETS',
  SET_LOADING_STATE = 'tweets/SET_LOADING_STATE',
  FETCH_ADD_TWEET = 'tweets/FETCH_ADD_TWEET',
  ADD_TWEET = 'tweets/ADD_TWEET',
  SET_ADD_TWEET_STATE = 'tweets/SET_ADD_TWEET_STATE'
}
//=============================================ACTIONS INTERFACES==================================================================
export interface SetTweetsActionInterface extends Action<TweetsActionTypes> {
  type: TweetsActionTypes.SET_TWEETS,
  payload: TweetsState['items']

}

export interface FetchAddTweetActionInterface extends Action<TweetsActionTypes> {
  type: TweetsActionTypes.FETCH_ADD_TWEET,
  payload: string
}
export interface addTweetActionInterface extends Action<TweetsActionTypes> {
  type: TweetsActionTypes.ADD_TWEET,
  payload: ITweet
}

export interface SetTweetsLoadingStateActionInterface extends Action<TweetsActionTypes> {
  type: TweetsActionTypes.SET_LOADING_STATE,
  payload: LoadingState
}
export interface SetAddTweetStateActionInterface extends Action<TweetsActionTypes> {
  type: TweetsActionTypes.SET_ADD_TWEET_STATE,
  payload: AddFormState
}

export interface FetchTweetsActionInterface extends Action<TweetsActionTypes> {
  type: TweetsActionTypes.FETCH_TWEETS,

}

//=============================================ACTION CREATORS=====================================================================
export const setTweets = (payload: TweetsState['items']): SetTweetsActionInterface => ({
  type: TweetsActionTypes.SET_TWEETS,
  payload
})

export const fetchAddTweet = (payload: string): FetchAddTweetActionInterface => ({
  type: TweetsActionTypes.FETCH_ADD_TWEET,
  payload
})

export const addTweet = (payload: ITweet): addTweetActionInterface => ({
  type: TweetsActionTypes.ADD_TWEET,
  payload
})

export const setTweetsLoadingState = (payload: LoadingState): SetTweetsLoadingStateActionInterface => ({
  type: TweetsActionTypes.SET_LOADING_STATE,
  payload
})

export const fetchTweets = (): FetchTweetsActionInterface => ({
  type: TweetsActionTypes.FETCH_TWEETS
})

export const setAddTweetsLoadingState = (payload: AddFormState): SetAddTweetStateActionInterface => ({
  type: TweetsActionTypes.SET_ADD_TWEET_STATE,
  payload
})


export type TweetsActions = SetTweetsActionInterface | FetchTweetsActionInterface | SetTweetsLoadingStateActionInterface
  | FetchAddTweetActionInterface | addTweetActionInterface | SetAddTweetStateActionInterface;   
