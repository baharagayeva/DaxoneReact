import React, { useEffect, useState } from "react";
import { getAllData } from "../../assets/data/dataFetch";

const ProductsList = ({ productsList, className, bestseller }) => {
  const handleClick = (e) => {
    e.preventDefault();
  };

  const [products, setProducts] = useState([]);
  // const [colors, setColors] = useState([]);
  // const [sizes, setSizes] = useState([]);
  // const [productStatuses, setproductStatuses] = useState([]);
  // const [categories, setcategories] = useState([]);

  useEffect(() => {
    getAllData("Product", setProducts);
    // getAllData("Color", setColors);
    // getAllData("Size", setSizes);
    // getAllData("ProductStatus", setproductStatuses);
    // getAllData("Category", setcategories)
  }, []);

  return (
    <>
      <div className="product-content container pb-5">
        <div className="product-boxs row">
          {products.map((item, idx) => (
            <div key={idx} className={className}>
              <div className="product-img position-relative">
                <img className="w-100" src={item.imgPath} />
                <div className="product-icons position-absolute">
                  <div className="product-icon">
                    <a href="#" title="Quick View" onClick={handleClick}>
                      <i className="fa-solid fa-plus"></i>
                    </a>
                  </div>
                  <div className="product-icon">
                    <a href="/wishlist" title="Wishlist">
                      <i className="fa-regular fa-heart"></i>
                    </a>
                  </div>
                  <div className="product-icon">
                    <a href="#" title="Compare">
                      <i className="fa-solid fa-retweet"></i>
                    </a>
                  </div>
                </div>
                <span className="badge position-absolute">new</span>
              </div>
              <div className="product-con">
                <p className="py-3">{item.category.name}</p>
                <a href="#" className="pro-name">
                  {item.name}
                </a>
                <div className="d-flex justify-content-between">
                  <div>
                    <p className="dollar">
                      <span className="product-cost">
                        {`$` + `${item.price}.00`}
                      </span>
                      <span className="old-cost">
                        {`$` + `${item.salePrice}.00`}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="product-addtocart plusBtn" onClick={handleClick}>
                <a href="#">+ Add To Cart</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductsList;
