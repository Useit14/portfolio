import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IAppSchema, ILanguage } from "./types/app";

const initialState: IAppSchema = {
  language: "ru",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    saveLanguage: (state, action: PayloadAction<ILanguage>) => {
      state.language = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder;
  },
});

export const { actions: appActions } = appSlice;
export const { reducer: appReducer } = appSlice;
