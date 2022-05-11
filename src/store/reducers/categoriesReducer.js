import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = { loading: false, data: null, error: null };

export const getCategories = createAsyncThunk(
  "/category/getCategory",
  async () => {
    const res = await fetch(`${process.env.REACT_APP_BASE_URL}/categories`);
    const result = await res.json();
    return result;
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: {
    [getCategories.pending]: (state) => {
      state.loading = true;
    },
    [getCategories.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    },
    [getCategories.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default categorySlice.reducer;
