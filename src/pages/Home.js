import React, { useEffect } from "react";
import SliderContainer from "../components/SliderContainer";
import CategoryCard from "../components/CategoryCard";
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getBanners } from "../store/reducers/bannerReducer";
import { getCategories } from "../store/reducers/categoriesReducer";

const Home = () => {
  const banners = useSelector((state) => state.banners);
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    !banners.data && dispatch(getBanners());
    !categories.data && dispatch(getCategories());
  }, []);
  return (
    <>
      <section className="banner-slider col-auto">
        <div className="row">
          {!banners.loading ? (
            <SliderContainer
              settings={{
                dots: true,
                infinite: false,
                speed: 500,
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                responsive: [
                  {
                    breakpoint: 767,
                    settings: {
                      slidesToShow: 1,
                      arrows: false,
                      slidesToScroll: 1,
                    },
                  },
                ],
              }}
            >
              {banners.data &&
                banners.data
                  .filter((banner) => banner.isActive)
                  .sort((a, b) => a.order - b.order)
                  .map((banner) => {
                    return (
                      <div key={banner.id} className="relative">
                        <img src={`${banner.bannerImageUrl}`} alt="" />
                        <div
                          className="bottom-shadow"
                          style={{
                            backgroundImage: `url("/static/images/shadow.png")`,
                          }}
                        ></div>
                      </div>
                    );
                  })}
            </SliderContainer>
          ) : (
            <Loader />
          )}
        </div>
      </section>
      <section className="category-cards">
        {categories.data &&
          categories.data
            .filter((category) => category.enabled)
            .sort((a, b) => a.order - b.order)
            .map((category) => {
              return <CategoryCard key={category.id} data={category} />;
            })}
      </section>
    </>
  );
};

export default Home;
