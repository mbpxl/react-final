import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  name: string;
  price: number;
  color: string;
  size: string;
  quantity: number;
}

interface BinState {
  bin: CartItem[];
  total: number;
}

const initialState: BinState = {
  bin: [],
  total: 0,
};

export const binSlice = createSlice({
  name: "bin-slice",
  initialState,
  reducers: {
    addToBin: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.bin.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.bin.push(action.payload);
      }
    },
    removeFromBin: (state, action: PayloadAction<string>) => {
      state.bin = state.bin.filter((item) => item.id !== action.payload);
    },
    clearBin: (state) => {
      state.bin = [];
    },
    updateTotal: (state) => {
      const total = state.bin.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      state.total = total;
    },
  },
});

export const { addToBin, removeFromBin, clearBin } = binSlice.actions;
export default binSlice.reducer;
