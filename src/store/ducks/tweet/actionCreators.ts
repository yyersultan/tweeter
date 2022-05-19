import { Action } from "redux"
import { ITweet } from "../tweets/contracts/state"
import { LoadingState } from "./contracts/state"

export enum TweetActionTypes {
  SET_DATA = 'tweet/SET_DATA',
  FETCH_DATA = 'tweet/FETCH_DATA',
  SET_LOADING_STATE = 'tweet/SET_LOADING_STATE',
  CLEAR_DATA = 'tweet/CLEAR_DATA'

}
//=============================================ACTIONS INTERFACES==================================================================
export interface SetTweetDataActionInterface extends Action<TweetActionTypes> {
  type: TweetActionTypes.SET_DATA,
  payload: ITweet | undefined
}
export interface ClearTweetDataActionInterface extends Action<TweetActionTypes> {
  type: TweetActionTypes.CLEAR_DATA
}
export interface SetTweetLoadingStateActionInterface extends Action<TweetActionTypes> {
  type: TweetActionTypes.SET_LOADING_STATE,
  payload: LoadingState
}

export interface FetchTweetActionInterface extends Action<TweetActionTypes> {
  type: TweetActionTypes.FETCH_DATA,
  payload: string
}

//=============================================ACTION CREATORS=====================================================================
export const setTweetData = (payload: ITweet | undefined): SetTweetDataActionInterface => ({
  type: TweetActionTypes.SET_DATA,
  payload
})

export const setTweetLoadingState = (payload: LoadingState): SetTweetLoadingStateActionInterface => ({
  type: TweetActionTypes.SET_LOADING_STATE,
  payload
})


export const fetchTweet = (id: string): FetchTweetActionInterface => ({
  type: TweetActionTypes.FETCH_DATA,
  payload: id
})

export const clearTweet = (): any => ({
  type: TweetActionTypes.CLEAR_DATA
})


// ============================================Combined Action Interfaces================================================================

export type TweetActions = SetTweetDataActionInterface
  | FetchTweetActionInterface | SetTweetLoadingStateActionInterface
  | ClearTweetDataActionInterface;   
