import { combineReducers, configureStore } from "@reduxjs/toolkit";
import FavoritesReducer from "../reducers/FavoritesReducer";

const store = configureStore({
  reducer: combineReducers({
    favorites: FavoritesReducer,
  })
});

export default store;