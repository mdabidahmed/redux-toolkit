/**
 * slice is part of react-toolkit
 * Basically, we can organize our data in small pieces
 * easy to maintain and complexity also reduces
 * reducer : basically a function, which help of this we are mutating the state
 */

import {createSlice} from '@reduxjs/toolkit';
const initialState: any = [];
const cartSlices = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item: any) => item.id != action.payload);
    }
  }
});

export const {add, remove} = cartSlices.actions;
export default cartSlices.reducer;
