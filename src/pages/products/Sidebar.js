import React, { useEffect, useState } from "react";

const Sidebar = ({
  categories,
  activeCategory,
  removeFilters,
  navigate,
  filterByCategory,
  dispatch,
}) => {
  const [getActiveCategory, setActiveCategory] = useState(activeCategory);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  useEffect(() => {
    const categoryName =
      categories.data &&
      categories.data
        .filter((cateogry) => {
          return cateogry.id === activeCategory;
        })
        .map((item) => {
          return item.name;
        });
    setActiveCategory(categoryName);
  }, [activeCategory]);
  return (
    <>
      <div
        className="sidebar-mob-dropdown"
        onClick={() => setDropdownOpen((prev) => !prev)}
      >
        <button className="mobile-category-nav">
          {getActiveCategory}{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            style={{}}
          >
            <path
              d="M6.19141 7.91675L4.94141 9.16675L10 14.2253L15.0586 9.16675L13.8086 7.91675L10 11.7253L6.19141 7.91675Z"
              fill="#525D66"
              style={{ fill: "#fff" }}
            />
          </svg>
        </button>
      </div>
      <ul
        className={`${
          isDropdownOpen ? "list-style-none show" : "list-style-none"
        }`}
      >
        {categories.data &&
          categories.data
            .filter((category) => category.enabled)
            .sort((a, b) => a.order - b.order)
            .map((category) => {
              return (
                <li key={category.id}>
                  <a
                    className={activeCategory === category.id ? "active" : ""}
                    onClick={() => {
                      setDropdownOpen((prev) => !prev);
                      if (activeCategory == category.id) {
                        navigate("/product-category");
                        dispatch(removeFilters());
                      } else {
                        navigate(category.id);
                        dispatch(
                          filterByCategory({
                            categoryId: category.id,
                            activeCategory: category.id,
                          })
                        );
                      }
                    }}
                  >
                    {category.name}
                  </a>
                </li>
              );
            })}
      </ul>
    </>
  );
};

export default Sidebar;
