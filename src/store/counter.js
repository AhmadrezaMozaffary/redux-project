import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counterVal: 0, showCounter: true };
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counterVal++;
    },
    decrement(state) {
      state.counterVal--;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
