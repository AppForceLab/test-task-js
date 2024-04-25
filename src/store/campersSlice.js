import { createSlice } from '@reduxjs/toolkit';

import { fetchCampers } from '../api/catalogApi';


const campersInitialState = {
  items: [],
  page: 1,
  showLoadMoreButton: true,
  isLoading: false,
  error: null,
};

const campersSlice = createSlice({
  name: 'campers',
  initialState: campersInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = [...state.items, ...action.payload];
        state.page = state.page + 1;
        if (action.payload.length < 4) {
          state.showLoadMoreButton = false;
        }
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const campersReducer = campersSlice.reducer;
