
import produce, { Draft } from 'immer';
import { TweetsActions, TweetsActionTypes } from './actionCreators';
import { LoadingState, TweetsState } from './contracts/state';

const initalTweetsState: TweetsState = {
  items: [],
  loadingState: LoadingState.NEVER
}


export const tweetsReducer = produce((draft: Draft<TweetsState>, action: TweetsActions) => {
  const { type } = action
  if (type === TweetsActionTypes.SET_TWEETS) {
    draft.items = action.payload;
    draft.loadingState = LoadingState.LOADED
  }
  if (type === TweetsActionTypes.FETCH_TWEETS) {
    draft.items = [];
    draft.loadingState = LoadingState.LOADING
  }
  if (type === TweetsActionTypes.SET_LOADING_STATE) {
    draft.loadingState = action.payload;
  }

}, initalTweetsState)