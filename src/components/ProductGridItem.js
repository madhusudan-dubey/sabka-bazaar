import React from "react";
import "../styles/components/productGridItem.scss";

const ProductGridItem = ({
  addToCart,
  data: { name: title, description, imageURL, price },
}) => {
  return (
    <div className="product-grid-item col-3 full-width-mob">
      <h5 className="title">{title}</h5>
      <div className="image-content-wrapper">
        <div className="img">
          <img src={imageURL} alt="" />
        </div>
        <div className="right-content">
          <div className="description">
            <div className="text">{description}</div>
          </div>
          <div className="grid-item-bottom fl alg-center jst-sp-bw">
            <div className="mrp-price hidden-tablet">MRP Rs.{price}</div>
            <div className="buy-now-btn">
              <button className="btn" onClick={addToCart}>
                Buy Now <span className="tablet-below">@ MRP Rs.{price}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGridItem;
