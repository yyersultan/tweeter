import { RootState } from "../../store";
import { LoadingState, TagState } from "./contracts/state";

export const selectTags = (state: RootState): TagState => state.tags

export const selectLoadingState = (state: RootState) => selectTags(state).loadingState;

export const selectIsTagsLoaded = (state: RootState) => selectLoadingState(state) === LoadingState.LOADING;

export const selectTagsItem = (state: RootState) => selectTags(state).items;

