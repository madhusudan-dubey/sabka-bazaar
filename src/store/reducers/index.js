import bannerReducer from "./bannerReducer";
import cartReducer from "./cartReducer";
import categoriesReducer from "./categoriesReducer";
import productsReducer from "./productsReducer";

const rootReducer = {
  banners: bannerReducer,
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
};

export default rootReducer;
