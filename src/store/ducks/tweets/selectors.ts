import { RootState } from "../../store";
import { LoadingState, TweetsState } from "./contracts/state";

export const selectTweet = (state: RootState): TweetsState => state.tweets

export const selectLoadingState = (state: RootState) => selectTweet(state).loadingState;

export const selectIsTweetsLoaded = (state: RootState) => selectLoadingState(state) === LoadingState.LOADING;

export const selectTweets = (state: RootState) => selectTweet(state).items;

