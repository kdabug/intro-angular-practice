import { reducer, appReducerState } from "./appReducers";
import { ActionReducerMap } from "@ngrx/store";

// YOURSTORE = {
//   userState: {},
//   appState: {},
// };

interface AppState {
  appReducer: appReducerState;
}

export const reducers: ActionReducerMap<AppState> = {
  appReducer: reducer
};
