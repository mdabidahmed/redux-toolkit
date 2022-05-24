/**
 * slice is part of react-toolkit
 * Basically, we can organize our data in small pieces
 * easy to maintain and complexity also reduces
 * reducer : basically a function, which help of this we are mutating the state
 */
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export enum STATUSES {
  IDLE = 'idle',
  ERROR = 'error',
  LOADING = 'loading'
}

const productSlice = createSlice({
  name: 'product',
  initialState: {
    data: [],
    status: STATUSES.IDLE
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  }
});

export const {setProducts, setStatus} = productSlice.actions;
export default productSlice.reducer;

// Thunks
/**
 * Already in-built in redux toolkit
 * Thunks is basically a function
 */
export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  const data = await res.json();
  return data;
});
