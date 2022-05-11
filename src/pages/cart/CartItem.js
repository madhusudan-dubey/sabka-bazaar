import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, decreaseCart } from "../../store/reducers/cartReducer";

function CartItem() {
  const { cartItems, cartTotalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleAddToCart = (product) => dispatch(addToCart(product));
  const handleDecreaseCart = (product) => dispatch(decreaseCart(product));

  return (
    <div className="cart__wrapper">
      {cartItems.length === 0 ? (
        <div className="cart__empty">
          <h2>No items in your cart</h2>
          <p>Your favourite items are just a click away</p>
        </div>
      ) : (
        <div className="cart-middle">
          {cartItems &&
            cartItems?.map((cartItem, index) => (
              <div key={index} className="cart__product-container">
                <div className="cart__product">
                  <div className="cart__image">
                    <img
                      src={cartItem.imageURL}
                      alt={cartItem.name}
                      height={80}
                      width={80}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div className="cart__item-details">
                    <h2>{cartItem.name}</h2>
                    <div className="cart__buttons">
                      <button
                        className="cart__buttons-decrease"
                        onClick={() => handleDecreaseCart(cartItem)}
                      >
                        -
                      </button>
                      <span className="cart__count">
                        {cartItem.cartQuantity}
                      </span>
                      <button
                        className="cart__buttons-increase"
                        onClick={() => handleAddToCart(cartItem)}
                      >
                        +
                      </button>
                      <span style={{ fontWeight: "bold" }}>x</span>
                      <div className="cart-product-total-price">
                        Rs.{cartItem.price * cartItem.cartQuantity}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cart-product-total-price">
                  Rs.{cartItem.price * cartItem.cartQuantity}
                </div>
              </div>
            ))}
          <div className="lowest__price">
            <div>
              <img
                src="/static/images/lowest-price.png"
                alt="lowest price "
                height="auto"
                width="100%"
              />
            </div>
            <div className="lowest__price-slogan">
              <p>You wont find it cheaper anywhere</p>
            </div>
          </div>
        </div>
      )}

      <div className="cart-bottom">
        {cartItems.length > 0 ? (
          <div className="checkout__page">
            <p className="promo">Promo code can be applied on payment page</p>
            <div className="checkout">
              <div>
                <Link to="/" className="cart__link">
                  Proceed to Checkout
                </Link>
              </div>
              <div className="cart-product-total-price">
                Rs.{cartTotalAmount}
              </div>
            </div>
          </div>
        ) : (
          <div className="start__shopping">
            <Link to="/" className="start__shopping-link">
              Start Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartItem;
