
import produce, { Draft } from 'immer';
import { TagsActions, TagsActionTypes } from './actionCreators';
import { LoadingState, TagState } from './contracts/state';


const initalTagsState: TagState = {
  items: [],
  loadingState: LoadingState.NEVER
}


export const tagsReducer = produce((draft: Draft<TagState>, action: TagsActions) => {
  const { type } = action

  if (type === TagsActionTypes.SET_TAGS) {
    draft.items = action.payload;
    draft.loadingState = LoadingState.LOADED
  }
  if (type === TagsActionTypes.FETCH_TAGS) {
    draft.items = [];
    draft.loadingState = LoadingState.LOADING
  }
  if (type === TagsActionTypes.SET_LOADING_STATE) {
    draft.loadingState = action.payload;
  }

}, initalTagsState)