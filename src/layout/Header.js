import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { openCart, getTotals } from "../store/reducers/cartReducer";
import "../styles/layout/header.scss";
import Cart from "../pages/cart/Cart";

const Header = () => {
  const cartTotalQuantity = useSelector(
    (state) => state.cart.cartTotalQuantity
  );
  const cart = useSelector((state) => state.cart);
  const isOpen = useSelector((state) => state.cart.isOpen);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);
  return (
    <header className="header">
      <div className="container">
        <div className="row jst-sp-bw header-row">
          <div className="header-left col-auto">
            <div className="row">
              <div className="header-logo col-auto">
                <Link to={"/"}>
                  <img
                    src={`${process.env.REACT_APP_IMAGES_PATH}/logo.png`}
                    alt=""
                  />
                </Link>
              </div>
              <nav className="header-navigation col-auto hidden-mobile">
                <ul className="list-style-none fl">
                  <li>
                    <NavLink to={"/"}>Home</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/product-category"}>Products</NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="header-right col-auto ">
            <div className="header-right-links fl  hidden-mobile">
              <Link to="/login">SignIn</Link>
              <Link to="/register">Register</Link>
            </div>
            <button
              className="header-cart-icon fl alg-center"
              onClick={() => {
                dispatch(openCart());
              }}
            >
              <div className="icon">
                <img
                  src={`${process.env.REACT_APP_IMAGES_PATH}/cart.svg`}
                  alt=""
                />
              </div>
              <div className="count-text">
                <span className="count-num">{cartTotalQuantity}</span>
                <span className="text">
                  {cartTotalQuantity > 1 ? "items" : "item"}
                </span>
              </div>
            </button>
          </div>
        </div>
        {isOpen && <Cart />}
      </div>
    </header>
  );
};

export default Header;
