import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/categoryCard.scss";

const CategoryCard = ({ data: { name: title, description, imageUrl, id } }) => {
  return (
    <div className="category-card fl alg-center">
      <div className="image col-4">
        <img src={imageUrl} alt="" />
      </div>
      <div className="content col-8 text-center">
        <h3 className="title">{title}</h3>
        <div className="description">{description}</div>
        <Link to={`/product-category/${id}`} className="btn primary-btn">
          Explore {title}
        </Link>
      </div>
      <div
        className="bottom-shadow"
        style={{
          display: "none",
          backgroundImage: `url("/static/images/shadow.png")`,
        }}
      ></div>
    </div>
  );
};

export default CategoryCard;
