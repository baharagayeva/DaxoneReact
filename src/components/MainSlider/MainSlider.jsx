import React, { useEffect, useState } from "react";
import { ShopNowButton } from "../ShopNowButton/ShopNowButton";
import { getAllData } from "../../assets/data/dataFetch";

const MainSlider = () => {

  const [advertisementBanners, setadvertisementBanners] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    getAllData("AdvertisementBanner", setadvertisementBanners);
  }, []);

  const nextSlider = () => {
    setIndex((prevIndex) => {
      let newIndex = prevIndex + 1;
      if (newIndex >= advertisementBanners.length) {
        newIndex = 0;
      }
      return newIndex;
    });
  };

  const prevSlider = () => {
    setIndex((prevIndex) => {
      let newIndex = prevIndex - 1;
      if (newIndex < 0) {
        newIndex = advertisementBanners.length - 1;
      }
      return newIndex;
    });
  };

  return (
    <>
      <section className="slider-container" id="slider-container">
        <div className="container">
          <div className="slider" id="slider">
            {advertisementBanners.map((item, idx) => (
              <div
                key={idx}
                className={`slider-item ${
                  idx === index ? "sliderActive" : ""
                } d-block d-sm-flex d-md-flex d-lg-flex d-xl-flex justify-content-center justify-content-sm-between justify-content-md-between justify-content-lg-between justify-content-xl-between align-items-center gap-5`}
              >
                <div
                  className={`slider-image ${
                    idx === index ? "sliderPicActive" : ""
                  }`}
                  id="slider-image"
                >
                  <img src={item.imgPath} alt="" />
                </div>
                <div className="slider-text">
                  <h3
                    className={`slider-sale ${
                      idx === index ? "sliderItemActive" : ""
                    }`}
                    id="slider-sale"
                  >
                    {`${item.discount}% off`}
                  </h3>
                  <h1
                    className={`slider-sale ${
                      idx === index ? "sliderItemActive" : ""
                    }`}
                    id="slider-sale"
                    style={{ fontWeight: "bold", marginTop: "40px" }}
                  >
                    {item.title}
                  </h1>
                  <h5
                    className={`slider-sale ${
                      idx === index ? "sliderItemActive" : ""
                    }`}
                    id="slider-sale"
                  >
                    {item.description}
                  </h5>
                  <ShopNowButton index={index} idx={idx} />
                </div>
              </div>
            ))}
            <div className="up-down-button d-flex flex-column justify-content-center align-item-center gap-3">
              <i
                id="up"
                className="fa-solid fa-chevron-up"
                onClick={nextSlider}
              ></i>
              <span id="count" style={{ textAlign: "center" }}>
                {index + 1}
              </span>
              <i
                id="down"
                className="fa-solid fa-chevron-down"
                onClick={prevSlider}
              ></i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainSlider;
