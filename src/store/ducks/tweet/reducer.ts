
import produce, { Draft } from 'immer';
import { TweetActions, TweetActionTypes } from './actionCreators';
import { LoadingState, TweetState } from './contracts/state';


const initalTweetState: TweetState = {
  data: undefined,
  loadingState: LoadingState.NEVER
}


export const tweetReducer = produce((draft: Draft<TweetState>, action: TweetActions) => {
  const { type } = action
  switch (type) {
    case TweetActionTypes.SET_DATA:
      draft.data = action.payload;
      draft.loadingState = LoadingState.LOADED;
      break;
    case TweetActionTypes.FETCH_DATA:
      draft.data = undefined;
      draft.loadingState = LoadingState.LOADING;
      break;
    case TweetActionTypes.SET_LOADING_STATE:
      draft.loadingState = action.payload;
      break;
    case TweetActionTypes.CLEAR_DATA:
      draft.data = undefined;
      break;
  }

}, initalTweetState)