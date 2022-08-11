import {
  combineReducers,
  configureStore,
  PreloadedState,
} from "@reduxjs/toolkit";
import headerSlice from "./slices/headerSlice";
import optionsSlice from "./slices/optionsSlice";

const rootReducer = combineReducers({
  header: headerSlice,
  options: optionsSlice,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
