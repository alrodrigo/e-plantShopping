import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload
      // If item with same name exists, increase quantity, otherwise add new
      const existing = state.items.find(i => i.name === item.name)
      if (existing) {
        existing.quantity = (existing.quantity || 1) + 1
      } else {
        state.items.push({ ...item, quantity: 1 })
      }
    },
    removeItem: (state, action) => {
      const name = action.payload
      state.items = state.items.filter(i => i.name !== name)
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload
      const existing = state.items.find(i => i.name === name)
      if (existing) {
        existing.quantity = quantity
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
