import { createSlice } from '@reduxjs/toolkit';

const initialFiltersState = {
  locationFilter: '',
  featuresFilter: [],
  typeFilter: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialFiltersState,
  reducers: {
    setLocationFilter(state, action) {
      state.locationFilter = action.payload;
    },
    addFeatureFilter(state, action) {
      state.push(action.payload);
    },
    removeFeatureFilter(state, action) {
      state.featuresFilter = state.featuresFilter.filter(
        (feature) => feature !== action.payload
      );
    },
    setTypeFilter(state, action) {
      state.typeFilter = action.payload;
    },
    removeTypeFilter(state) {
      state.typeFilter = '';
    },
  },
});

export const {
  setLocationFilter,
  addFeatureFilter,
  removeFeatureFilter,
  setTypeFilter,
  removeTypeFilter,
} = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
