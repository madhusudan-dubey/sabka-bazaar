import React, { useEffect, useState } from "react";
import ProductGridItem from "../../components/ProductGridItem";
import { useNavigate, useParams } from "react-router-dom";
import "../../styles/pages/products.scss";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../store/reducers/categoriesReducer";
import Toaster from "../../components/Toaster";
import {
  getProducts,
  filterByCategory,
  removeFilters,
} from "../../store/reducers/productsReducer";
import Loader from "../../components/Loader";
import { addToCart } from "../../store/reducers/cartReducer";
import Sidebar from "./Sidebar";
const Products = () => {
  const [istOpenToaster, setOpenToaster] = useState(false);
  const products = useSelector((state) => state.products);
  const categories = useSelector((state) => state.categories);
  const filterData = useSelector((state) => state.products.filterData);
  const activeCategory = useSelector((state) => state.products.activeCategory);
  const category = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const clearToaster = (timeout) => {
    setTimeout(() => {
      setOpenToaster(false);
    }, timeout);
  };
  useEffect(() => {
    window.scrollTo(0, 0);

    filterData.length && dispatch(removeFilters());
    const { categoryId } = category;
    !products.data && dispatch(getProducts(category ? categoryId : ""));
    products.data &&
      category &&
      dispatch(
        filterByCategory({
          categoryId: categoryId,
          activeCategory: categoryId,
        })
      );
    !categories.data && dispatch(getCategories());
  }, [dispatch]);
  const content = () => {
    if (products.loading) {
      return <Loader></Loader>;
    }
    if (filterData.length) {
      return filterData.map((product) => {
        const { id, name, price, imageURL } = product;
        return (
          <ProductGridItem
            data={product}
            key={product.id}
            addToCart={() => {
              dispatch(addToCart({ id, name, price, imageURL }));
              setOpenToaster(true);
            }}
          />
        );
      });
    }

    if (products.data) {
      return products.data.map((product) => {
        const { id, name, price, imageURL } = product;
        return (
          <ProductGridItem
            data={product}
            key={product.id}
            addToCart={() => {
              dispatch(addToCart({ id, name, price, imageURL }));
              setOpenToaster(true);
            }}
          />
        );
      });
    }
    return (
      <>
        <h3>No Products Found</h3>
      </>
    );
  };
  return (
    <div className="collection-page">
      <div className="collection-main fl jst-sp-bw fl-mob-wp">
        <aside className="collection-sidebar  col-auto full-width-mob">
          <div className="collection-sidebar-inner">
            <div className="collection-sidebar-link">
              <Sidebar
                navigate={navigate}
                dispatch={dispatch}
                filterByCategory={filterByCategory}
                categories={categories}
                activeCategory={activeCategory}
                removeFilters={removeFilters}
              />
            </div>
          </div>
        </aside>
        <section className="collection-content  col-auto full-width-mob">
          <div className="products-grid-list fl fl-wp row">{content()}</div>
        </section>
      </div>
      {istOpenToaster && (
        <Toaster text={"Product added to cart successfully"} />
      )}
      {istOpenToaster && clearToaster(500)}
    </div>
  );
};

export default Products;
