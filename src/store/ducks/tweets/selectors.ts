import { RootState } from "../../store";
import { AddFormState, LoadingState, TweetsState } from "./contracts/state";

export const selectTweet = (state: RootState): TweetsState => state.tweets

export const selectLoadingState = (state: RootState) => selectTweet(state).loadingState;

// this selector has incorrect name i think 
export const selectIsTweetsLoaded = (state: RootState) => selectLoadingState(state) === LoadingState.LOADING;

export const selectTweets = (state: RootState) => selectTweet(state).items;

export const selectIsLoadingAddFormState = (state: RootState) => selectTweet(state).addFormState === AddFormState.LOADING;