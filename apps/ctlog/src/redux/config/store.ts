import { configureStore, type ReducersMapObject } from "@reduxjs/toolkit";

import { appReducer } from "../slices/app/appSlice";
import type { IStateSchema } from "./StateSchema";

const rootReducers: ReducersMapObject<IStateSchema> = {
  app: appReducer,
};

export const store = configureStore<IStateSchema>({
  reducer: rootReducers,
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
