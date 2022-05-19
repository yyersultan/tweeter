
import { takeEvery, call, put } from "redux-saga/effects";

import { LoadingState } from "./contracts/state";
import { TweetsApi } from "../../../services/api/tweetsApi";
import { FetchTweetActionInterface, setTweetData, setTweetLoadingState, TweetActionTypes } from "./actionCreators";

export function* fetchTweetRequest({ payload: tweetId }: FetchTweetActionInterface): any {
  try {
    const items = yield call(TweetsApi.fetchTweetData, tweetId);
    yield put(setTweetData(items[0]));
  } catch (e) {
    yield put(setTweetLoadingState(LoadingState.ERROR));
  }
}


export function* tweetSaga() {
  yield takeEvery(TweetActionTypes.FETCH_DATA, fetchTweetRequest)
}