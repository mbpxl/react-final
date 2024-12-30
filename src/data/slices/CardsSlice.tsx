import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  cards: [
    { id: "1", heading: "Good type A", size: "S", price: 300 },
    { id: "2", heading: "Good type B", size: "M", price: 500 },
    { id: "3", heading: "Good type C", size: "M", price: 500 },
    { id: "4", heading: "Good type C", size: "M", price: 500 },
    { id: "5", heading: "Good type C", size: "M", price: 500 },
    { id: "6", heading: "Good type C", size: "S", price: 300 },
    { id: "7", heading: "Good type C", size: "S", price: 300 },
    { id: "8", heading: "Good type C", size: "L", price: 1000 },
    { id: "9", heading: "Good type C", size: "L", price: 1000 },
  ],
  filter: "",
};

export const CardSlice = createSlice({
  name: "CardSlice",
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = CardSlice.actions;

export default CardSlice.reducer;
