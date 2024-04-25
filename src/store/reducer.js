import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

import { campersReducer } from './campersSlice';
import { favoritesReducer } from './favoritesSlice';
import { filtersReducer } from './filtersSlice';

const persistConfig = {
  key: 'favorites',
  storage,
};

const persistedFavoritesReducer = persistReducer(
  persistConfig,
  favoritesReducer
);

export const reducer = {
  campers: campersReducer,
  favorites: persistedFavoritesReducer,
  filters: filtersReducer,
};
