import React, { useEffect, useState } from "react";
import { ShopNowButton } from "../ShopNowButton/ShopNowButton";
import { getAllData } from "../../assets/data/dataFetch";

const DiscountSide = () => {
  const [seasonDiscounts, setSeasonDiscounts] = useState([]);

  useEffect(() => {
    getAllData("SeasonDiscount", setSeasonDiscounts);
  }, []);

  return (
    <>
      <section className="discount-section mt-5">
        <div className="custom-container">
          <div className="discount-area row align-items-center">
            {seasonDiscounts.map((seasonDiscount) => (
              <>
                <div className="discount-img col-lg-6 col-md-5 col-sm-10 col-10">
                  <a href="#">
                    <img className="w-100" src={seasonDiscount.imgPath} />
                  </a>
                </div>
                <div className="discount-content col-lg-4 col-md-5 col-sm-12 col-12">
                  <p>{seasonDiscount.description}</p>
                  <h2>{seasonDiscount.title}</h2>
                  <p className="discount-p">
                    {seasonDiscount.titleDescription}
                  </p>
                  <div className="discount-btn">
                    <ShopNowButton />
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DiscountSide;
