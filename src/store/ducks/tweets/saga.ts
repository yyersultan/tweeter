import { call, put, takeLatest } from "redux-saga/effects";

import { addTweet, FetchAddTweetActionInterface, setTweets, setTweetsLoadingState, TweetsActionTypes } from "./actionCreators";
import { TweetsApi } from '../../../services/api/tweetsApi';
import { ITweet, LoadingState } from "./contracts/state";

export function* fetchTweetsRequest(): any {
  try {
    const items = yield call(TweetsApi.fetchTweets);
    yield put(setTweets(items));
  } catch (e) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
}

export function* fetchAddTweetRequest({ payload }: FetchAddTweetActionInterface): any {
  console.log(payload);

  try {
    const data: ITweet = {
      _id: (Math.random().toString(36).substring(2)),
      text: payload,
      user: {
        fullName: 'Test User',
        username: "test",
        avatarUrl: "https://source.unsplash.com/random/100x100?12"
      }
    }
    yield call(TweetsApi.addTweet, data);

    // yield put(addTweet(item));
  } catch (e) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
}

export function* tweetsSaga() {
  yield takeLatest(TweetsActionTypes.FETCH_TWEETS, fetchTweetsRequest);
  yield takeLatest(TweetsActionTypes.FETCH_ADD_TWEET, fetchAddTweetRequest)
}