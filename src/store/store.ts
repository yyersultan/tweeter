import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from 'redux-saga'
import { TagState } from "./ducks/tags/contracts/state";
import { TweetState } from "./ducks/tweet/contracts/state";
import { TweetsState } from "./ducks/tweets/contracts/state";

import { rootReducer } from "./rootReducer";
import rootSaga from "./sagas";

const sagaMiddleWare = createSagaMiddleware();

export interface RootState {
  tweets: TweetsState,
  tags: TagState,
  tweet: TweetState
}

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));


sagaMiddleWare.run(rootSaga);