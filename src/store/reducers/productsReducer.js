import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: null,
  error: null,
  filterData: [],
  activeCategory: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterByCategory: (state, { payload }) => {
      const currentState = state;
      const filterData = currentState.data.filter((product) => {
        return product.category === payload.categoryId;
      });
      state.filterData = filterData;
      state.activeCategory = payload.activeCategory;
    },
    removeFilters: (state) => {
      state.filterData = [];
      state.activeCategory = null;
    },
    getProductsPending: (state) => {
      state.loading = true;
    },
    getProductsSuccess: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    },
    getProductsFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const {
  filterByCategory,
  removeFilters,
  getProductsPending,
  getProductsSuccess,
  getProductsFailure,
} = productsSlice.actions;

export default productsSlice.reducer;

export const getProducts = (categoryId) => {
  return async (dispatch) => {
    try {
      dispatch(getProductsPending());
      const res = await fetch(`${process.env.REACT_APP_BASE_URL}/products`);
      const result = await res.json();
      dispatch(getProductsSuccess(result));
      if (categoryId) {
        dispatch(
          filterByCategory({
            categoryId: categoryId,
            activeCategory: categoryId,
          })
        );
      }
    } catch (error) {
      dispatch(getProductsFailure(error));
    }
  };
};
