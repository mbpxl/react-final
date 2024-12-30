import { configureStore } from "@reduxjs/toolkit";
import cardListReducer from "../data/slices/CardsSlice";
import binReducer from "../data/slices/BinSlice";

export const store = configureStore({
  reducer: {
    cardList: cardListReducer,
    binList: binReducer,
  }
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];