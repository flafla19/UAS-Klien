// src/redux/earthquakeSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchEarthquakes = createAsyncThunk('earthquakes/fetchEarthquakes', async () => {
  const response = await fetch('https://api.bmkg.go.id/earthquake/latest');
  const data = await response.json();
  return data;
});

const earthquakeSlice = createSlice({
  name: 'earthquakes',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEarthquakes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEarthquakes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchEarthquakes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default earthquakeSlice.reducer;
