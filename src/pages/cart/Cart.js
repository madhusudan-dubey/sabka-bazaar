import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { closeCart } from "../../store/reducers/cartReducer";
import "../../styles/pages/cart.scss";
function Cart() {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="cart-page">
      <section className="cart-section">
        <div className="cart">
          <header className="cart__header">
            <h2>My Cart ({cartTotalQuantity} item)</h2>
            <span
              aria-label="close button"
              role="button"
              style={{ cursor: "pointer" }}
              onClick={() => {
                dispatch(closeCart());
              }}
            >
              &#215;
            </span>
          </header>
        </div>
        <CartItem />
      </section>
      <div className="overlay"></div>
    </div>
  );
}

export default Cart;
