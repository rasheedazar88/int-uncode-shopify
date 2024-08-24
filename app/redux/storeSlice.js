// app/features/stores/storesSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  stores: [],
  loading: false,
  error: null,
};

// Async thunk to fetch stores from your backend
export const fetchStores = createAsyncThunk("stores/fetchStores", async () => {
  const response = await fetch("/api/stores");
  return await response.json();
});

const storesSlice = createSlice({
  name: "stores",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      
  },
});

export default storesSlice.reducer;
