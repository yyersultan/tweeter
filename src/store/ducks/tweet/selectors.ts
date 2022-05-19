import { RootState } from "../../store";
import { LoadingState, TweetState } from "./contracts/state";

export const selectTweet = (state: RootState): TweetState => state.tweet

export const selectLoadingState = (state: RootState) => selectTweet(state).loadingState;

export const selectIsTweetLoaded = (state: RootState) => selectLoadingState(state) === LoadingState.LOADING;

export const selectTweetData = (state: RootState) => selectTweet(state).data;

