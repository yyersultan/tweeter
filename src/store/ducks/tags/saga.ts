
import { takeEvery, call, put } from "redux-saga/effects";
import { TagssApi } from "../../../services/api/tagsApi";

import { setTags, setTagsLoadingState, TagsActionTypes } from "./actionCreators";
import { LoadingState } from "./contracts/state";

export function* fetchTagsRequest(): any {
  try {
    const items = yield call(TagssApi.fetchTags);

    yield put(setTags(items));
  } catch (e) {
    yield put(setTagsLoadingState(LoadingState.ERROR));
  }

}


export function* tagsSaga() {
  yield takeEvery(TagsActionTypes.FETCH_TAGS, fetchTagsRequest)
}