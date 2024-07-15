// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import earthquakeReducer from './earthquakeSlice';

const store = configureStore({
  reducer: {
    earthquakes: earthquakeReducer,
  },
});

export default store;
