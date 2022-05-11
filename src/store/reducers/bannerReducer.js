import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = { loading: false, data: null, error: null };

export const getBanners = createAsyncThunk(
  "/banner/getBanners",
  async (_, { getState }) => {
    const res = await fetch(`${process.env.REACT_APP_BASE_URL}/banners`);
    const result = await res.json();
    return result;
  }
);

const bannerSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {},
  extraReducers: {
    [getBanners.pending]: (state) => {
      state.loading = true;
    },
    [getBanners.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    },
    [getBanners.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default bannerSlice.reducer;
