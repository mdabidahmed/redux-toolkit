/**
 * slice is part of react-toolkit
 * Basically, we can organize our data in small pieces
 * easy to maintain and complexity also reduces
 * reducer : basically a function, which help of this we are mutating the state
 */

import {createSlice} from '@reduxjs/toolkit';
export enum STATUS {
  IDLE = 'idle',
  ERROR = 'error',
  LOADING = 'loading'
}
const initialState: any = {};
const productSlice = createSlice({
  name: 'product',
  data: [],
  status: STATUS.IDLE,
  reducers: {
    // setProducts(state, action) {
    //   // Do not do API call from reducers
    //   state.data = action.payload;
    // },
    // setStatus(state, action) {
    //   state.data = action.payload;
    // }
  }
});

export const {setProducts, setStatus} = productSlice.actions;
export default productSlice.reducer;

// Thunks
/**
 * Already in-built in redux toolkit
 * Thunks is basically a function
 */

export function fetchProducts() {
  return async function fetchProductThunks(dispatch: any, getState: any) {
    //getState is used for current state
    dispatch(setStatus(STATUS.LOADING));
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      dispatch(setProducts(data));
      dispatch(setStatus(STATUS.IDLE));
    } catch (err) {
      console.log(err);
      dispatch(setStatus(STATUS.ERROR));
    }
  };
}
