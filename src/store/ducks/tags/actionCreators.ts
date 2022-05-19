import { Action } from "redux"
import { LoadingState, TagState } from "./contracts/state"

export enum TagsActionTypes {
  SET_TAGS = 'tags/SET_TAGS',
  FETCH_TAGS = 'tags/FETCH_TAGS',
  SET_LOADING_STATE = 'tags/SET_LOADING_STATE',

}
//=============================================ACTIONS INTERFACES==================================================================
export interface SetTagsItemsActionInterface extends Action<TagsActionTypes> {
  type: TagsActionTypes.SET_TAGS,
  payload: TagState['items']
}

export interface SetTagsLoadingStateActionInterface extends Action<TagsActionTypes> {
  type: TagsActionTypes.SET_LOADING_STATE,
  payload: LoadingState
}

export interface FetchTagsActionInterface extends Action<TagsActionTypes> {
  type: TagsActionTypes.FETCH_TAGS,

}

//=============================================ACTION CREATORS=====================================================================
export const setTags = (payload: TagState['items']): SetTagsItemsActionInterface => ({
  type: TagsActionTypes.SET_TAGS,
  payload
})

export const setTagsLoadingState = (payload: LoadingState): SetTagsLoadingStateActionInterface => ({
  type: TagsActionTypes.SET_LOADING_STATE,
  payload
})


export const fetchTags = (): FetchTagsActionInterface => ({
  type: TagsActionTypes.FETCH_TAGS
})


export type TagsActions = SetTagsItemsActionInterface | FetchTagsActionInterface | SetTagsLoadingStateActionInterface;   
