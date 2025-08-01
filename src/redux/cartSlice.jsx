import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    couponApplied: false,
  },
  reducers: {
    addToCart: (state, action) => {
      // logic...
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    changeQuantity: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    applyCoupon: (state, action) => {
      const validCoupon = action.payload === "DISCOUNT10";
      if (validCoupon) {
        state.couponApplied = true;
        state.discount = 10;
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.couponApplied = false;
      state.discount = 0;
    },
  }

});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  applyCoupon,
  changeQuantity
} = cartSlice.actions;

export default cartSlice.reducer;
