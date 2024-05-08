import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // below are the reducer functions that will modify the state
    addItem: (state, action) => {
      //we are mutating the state here (existign state)
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      state.items.length = 0;

      // state.items = [];
      // you cannot do state = [] -> this will not work
    },
  },
});

export default cartSlice.reducer;

export const { addItem, removeItem, clearCart } = cartSlice.actions;
