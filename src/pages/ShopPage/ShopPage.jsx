import React, { useEffect, useState } from "react";
import ProductsList from "../../components/ProductsList/ProductsList";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import chair from "../../assets/images/chair.webp";
import chair2 from "../../assets/images/chair2.webp";
import { Link } from "react-router-dom";
import { getAllData } from "../../assets/data/dataFetch";

const ShopPage = () => {
  //change shop content
  const [activeContent, setActiveContent] = useState("shop1");

  const changeContent = (contentId) => {
    setActiveContent(contentId);
  };

  //accordion
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleDropdown = (index) => {
    setActiveCategory(index === activeCategory ? null : index);
  };

  //fetch entities
  const [categories, setCategories] = useState([]);
  const [colors, setColors] = useState([]);

  useEffect(() => {
    getAllData("Category", setCategories);
    getAllData("Color", setColors);
  }, []);

  const productsList = [
    {
      image: chair,
      text: {
        category: "Chair",
        sale: "",
        price: "$240.00",
        salePrice: "",
        title: "Golden Easy Comfort Chair",
      },
    },
    {
      image: chair2,
      text: {
        category: "Chair",
        sale: "30% off",
        price: "$210.00",
        salePrice: "$550.00",
        title: "Silver Pency Comfort Chair",
      },
    },
    {
      image: chair,
      text: {
        category: "Chair",
        sale: "New",
        price: "$210.00",
        salePrice: "$550.00",
        title: "Silver Pency Comfort Chair",
      },
    },
    {
      image: chair2,
      text: {
        category: "Chair",
        sale: "Stock out",
        price: "$210.00",
        salePrice: "$550.00",
        title: "Silver Pency Comfort Chair",
      },
    },
    {
      image: chair2,
      text: {
        category: "Chair",
        sale: "Stock out",
        price: "$210.00",
        salePrice: "$550.00",
        title: "Silver Pency Comfort Chair",
      },
    },
    {
      image: chair,
      text: {
        category: "Chair",
        sale: "New",
        price: "$210.00",
        salePrice: "$550.00",
        title: "Silver Pency Comfort Chair",
      },
    },
    {
      image: chair2,
      text: {
        category: "Chair",
        sale: "Stock out",
        price: "$210.00",
        salePrice: "$550.00",
        title: "Silver Pency Comfort Chair",
      },
    },
    {
      image: chair2,
      text: {
        category: "Chair",
        sale: "Stock out",
        price: "$210.00",
        salePrice: "$550.00",
        title: "Silver Pency Comfort Chair",
      },
    },
  ];

  // const categories = [
  //   {
  //     name: "Women Fashion",
  //     subcategories: ["Dress", "Shoes", "Sunglasses", "Sweater", "Handbag"],
  //   },
  //   {
  //     name: "Men Fashion",
  //     subcategories: ["Shirt", "Shoes", "Sunglasses", "Sweater", "Jacket"],
  //   },
  //   {
  //     name: "Furniture",
  //     subcategories: [
  //       "Chair",
  //       "Lift Chair",
  //       "Bunk Bed",
  //       "Computer Desk",
  //       "Bookcase",
  //     ],
  //   },
  // ];

  return (
    <>
      <Breadcrumb pageTitle={"Shop"} />

      <section className="shop-main-section">
        <div className="custom-container">
          <div className="row flex-row-reverse">
            <div className="col-lg-9">
              <div className="shop-product-topbar row">
                <div className="icons-container col-1 d-flex justify-content-between align-items-center">
                  <div className="pe-3">
                    <Link
                      className={activeContent === "shop1" ? "active-btn" : ""}
                      onClick={() => changeContent("shop1")}
                    >
                      <i className="fa-solid fa-table-cells"></i>
                    </Link>
                  </div>
                  <div>
                    <Link
                      className={activeContent === "shop2" ? "active-btn" : ""}
                      onClick={() => changeContent("shop2")}
                    >
                      <i className="fa-solid fa-list"></i>
                    </Link>
                  </div>
                </div>
                <div className="topbar-info col-md-3 col-sm-7 col-12 offset-xl-0 offset-sm-1 offset-0 d-flex align-items-center justify-content-xl-center">
                  <p>Showing 1 - 20 of 30 results</p>
                </div>
                <div className="product-sorting-part d-flex justify-content-between col-md-7 col-sm-12 flex-sm-row flex-column gap-3">
                  <div className="view-select">
                    <label>View:</label>
                    <select>
                      <option value="0">20</option>
                      <option value="1">23</option>
                      <option value="2">30</option>
                    </select>
                  </div>
                  <div className="sortby-select">
                    <label>Sort by:</label>
                    <select>
                      <option value="0">Default</option>
                      <option value="1">Name</option>
                      <option value="2">Price</option>
                    </select>
                  </div>
                </div>
              </div>
              <div
                id="shop1"
                className={`product-section shop1 row ${
                  activeContent === "shop1" ? "active" : ""
                }`}
              >
                <div className="product-area col-12">
                  <div className="product-boxs row">
                    <ProductsList
                      productsList={productsList}
                      className={"product-box all col-xl-4 col-sm-6 col-12"}
                      bestseller={""}
                    />
                  </div>
                </div>
                <div className="products-pagination col-sm-12 col-3 d-flex justify-content-center">
                  <ul className="d-flex gap-2">
                    <li>
                      <a className="prev" href="#">
                        <i className="fa-solid fa-chevron-left"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">01</a>
                    </li>
                    <li>
                      <a href="#">02</a>
                    </li>
                    <li>
                      <a className="active" href="#">
                        03
                      </a>
                    </li>
                    <li>
                      <a href="#">04</a>
                    </li>
                    <li>
                      <a href="#">05</a>
                    </li>
                    <li>
                      <a href="#">06</a>
                    </li>
                    <li>
                      <a className="next" href="#">
                        <i className="fa-solid fa-chevron-right"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                id="shop2"
                className={`product-section shop2 row ${
                  activeContent === "shop2" ? "active" : ""
                }`}
              >
                <div className="products-wrap">
                  <div className="row">
                    <div className="image-wrap position-relative col-xl-4 col-lg-5 col-md-6 col-sm-6 col-10">
                      <div className="pro-img">
                        <a href="#">
                          <img className="w-100" src={chair} />
                        </a>
                      </div>
                      <div className="pro-quickview position-absolute">
                        <a href="#">
                          <i className="fa-solid fa-plus"></i>
                        </a>
                      </div>
                    </div>
                    <div className="product-info col-xl-8 col-lg-7 col-md-6 col-sm-6 col-10">
                      <span>Chair</span>
                      <h4>
                        <a href="#"> Golden Easy Spot Chair.</a>
                      </h4>
                      <div className="pro-price">
                        <span>$40.00</span>
                        <span className="old-price">$50.00</span>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipic it, sed
                        do eiusmod tempor labor incididunt ut et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip.
                      </p>
                      <div className="product-icons">
                        <div className="product-icon">
                          <a href="#" title="Wishlist">
                            <i className="fa-regular fa-heart"></i>
                          </a>
                        </div>
                        <div className="product-icon">
                          <a href="#" title="Compare">
                            <i className="fa-solid fa-retweet"></i>
                          </a>
                        </div>
                        <div className="product-icon">
                          <a href="#" title="Cart">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="products-wrap">
                  <div className="row">
                    <div className="image-wrap position-relative col-xl-4 col-lg-5 col-md-6 col-sm-6 col-10">
                      <div className="pro-img">
                        <a href="#">
                          <img className="w-100" src={chair2} />
                        </a>
                      </div>
                      <div className="pro-quickview position-absolute">
                        <a href="#">
                          <i className="fa-solid fa-plus"></i>
                        </a>
                      </div>
                    </div>
                    <div className="product-info col-xl-8 col-lg-7 col-md-6 col-sm-6 col-10">
                      <span>Chair</span>
                      <h4>
                        <a href="#"> Golden Easy Spot Chair.</a>
                      </h4>
                      <div className="pro-price">
                        <span>$60.00</span>
                        <span className="old-price">$80.00</span>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipic it, sed
                        do eiusmod tempor labor incididunt ut et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip.
                      </p>
                      <div className="product-icons">
                        <div className="product-icon">
                          <a href="#" title="Wishlist">
                            <i className="fa-regular fa-heart"></i>
                          </a>
                        </div>
                        <div className="product-icon">
                          <a href="#" title="Compare">
                            <i className="fa-solid fa-retweet"></i>
                          </a>
                        </div>
                        <div className="product-icon">
                          <a href="#" title="Cart">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="products-wrap">
                  <div className="row">
                    <div className="image-wrap position-relative col-xl-4 col-lg-5 col-md-6 col-sm-6 col-10">
                      <div className="pro-img">
                        <a href="#">
                          <img className="w-100" src={chair2} />
                        </a>
                      </div>
                      <div className="pro-quickview position-absolute">
                        <a href="#">
                          <i className="fa-solid fa-plus"></i>
                        </a>
                      </div>
                    </div>
                    <div className="product-info col-xl-8 col-lg-7 col-md-6 col-sm-6 col-10">
                      <span>Chair</span>
                      <h4>
                        <a href="#"> Golden Easy Spot Chair.</a>
                      </h4>
                      <div className="pro-price">
                        <span>$70.00</span>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipic it, sed
                        do eiusmod tempor labor incididunt ut et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip.
                      </p>
                      <div className="product-icons">
                        <div className="product-icon">
                          <a href="#" title="Wishlist">
                            <i className="fa-regular fa-heart"></i>
                          </a>
                        </div>
                        <div className="product-icon">
                          <a href="#" title="Compare">
                            <i className="fa-solid fa-retweet"></i>
                          </a>
                        </div>
                        <div className="product-icon">
                          <a href="#" title="Cart">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="products-wrap">
                  <div className="row">
                    <div className="image-wrap position-relative col-xl-4 col-lg-5 col-md-6 col-sm-6 col-10">
                      <div className="pro-img">
                        <a href="#">
                          <img className="w-100" src={chair2} />
                        </a>
                      </div>
                      <div className="pro-quickview position-absolute">
                        <a href="#">
                          <i className="fa-solid fa-plus"></i>
                        </a>
                      </div>
                    </div>
                    <div className="product-info col-xl-8 col-lg-7 col-md-6 col-sm-6 col-10">
                      <span>Chair</span>
                      <h4>
                        <a href="#"> Golden Easy Spot Chair.</a>
                      </h4>
                      <div className="pro-price">
                        <span>$50.00</span>
                        <span className="old-price">$60.00</span>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipic it, sed
                        do eiusmod tempor labor incididunt ut et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip.
                      </p>
                      <div className="product-icons">
                        <div className="product-icon">
                          <a href="#" title="Wishlist">
                            <i className="fa-regular fa-heart"></i>
                          </a>
                        </div>
                        <div className="product-icon">
                          <a href="#" title="Compare">
                            <i className="fa-solid fa-retweet"></i>
                          </a>
                        </div>
                        <div className="product-icon">
                          <a href="#" title="Cart">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="products-pagination col-sm-12 col-3 d-flex justify-content-center">
                  <ul className="d-flex gap-2">
                    <li>
                      <a className="prev" href="#">
                        <i className="fa-solid fa-chevron-left"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">01</a>
                    </li>
                    <li>
                      <a href="#">02</a>
                    </li>
                    <li>
                      <a className="active" href="#">
                        03
                      </a>
                    </li>
                    <li>
                      <a href="#">04</a>
                    </li>
                    <li>
                      <a href="#">05</a>
                    </li>
                    <li>
                      <a href="#">06</a>
                    </li>
                    <li>
                      <a className="next" href="#">
                        <i className="fa-solid fa-chevron-right"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="shop-sidebar">
                <div className="sidebar-wrapper search">
                  <h4 className="sidebar-title">Search</h4>
                  <div className="shop-search row">
                    <input
                      className="col-12"
                      type="text"
                      placeholder="Search here..."
                    />
                    <button className="col-2">
                      <i className="fa-solid fa-magnifying-glass fa-rotate-90"></i>
                    </button>
                  </div>
                </div>
                <div className="sidebar-wrapper category">
                  <h4 className="sidebar-title">Shop By Categories</h4>
                  <div className="shop-category">
                    <ul>
                      {/* {categories.map((category, index) => (
                        <li key={index}>
                          <a
                            className="category-name"
                            onClick={() => toggleDropdown(index)}
                          >
                            {category.name}
                            <i className="fa-solid fa-chevron-down"></i>
                          </a>
                          <ul
                            className={`shop-subcategory ${
                              activeCategory === index ? "active" : ""
                            }`}
                          >
                            {category.subcategories.map(
                              (subcategory, subIndex) => (
                                <li key={subIndex}>
                                  <a href="#">{subcategory}</a>
                                </li>
                              )
                            )}
                          </ul>
                        </li>
                      ))} */}
                      {categories.map((category) => (
                        <li>
                          <a className="category-name">{category.name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="sidebar-wrapper filter">
                  <h4 className="sidebar-title">Price Filter</h4>
                  <p className="range-init">Range: $100.00 - 1.300.00</p>
                  <div className="slider" id="slider">
                    <div className="range"></div>
                    <div className="thumb" id="thumb1">
                      <div className="white-circle"></div>
                    </div>
                    <div className="thumb" id="thumb2">
                      <div className="white-circle"></div>
                    </div>
                  </div>
                  {/* <!-- <p>$0 - $800</p> --> */}
                  <div className="d-flex flex-column">
                    <input
                      id="amount"
                      type="text"
                      placeholder="Add Your Price"
                    />
                    <button>Filter</button>
                  </div>
                </div>
                <div className="sidebar-wrapper checkbox refine">
                  <h4 className="sidebar-title">Refine By</h4>
                  <div className="shop-checkbox">
                    <label className="checkbox-container">
                      <a href="#">
                        On Sale<span>4</span>
                      </a>
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>

                    <label className="checkbox-container">
                      <a href="#">
                        New<span>5</span>
                      </a>
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>

                    <label className="checkbox-container">
                      <a href="#">
                        In Stock<span>6</span>
                      </a>
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
                <div className="sidebar-wrapper checkbox colour">
                  <h4 className="sidebar-title">Colour</h4>
                  <div className="shop-checkbox">
                    {colors.map((color) => (
                      <label className="checkbox-container">
                        <a href="#">{color.name}</a>
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    ))}
                    {/* <label className="checkbox-container">
                      <a href="#">
                        Green <span>7</span>
                      </a>
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>

                    <label className="checkbox-container">
                      <a href="#">
                        Cream <span>8</span>
                      </a>
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>

                    <label className="checkbox-container">
                      <a href="#">
                        Blue <span>9</span>
                      </a>
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="checkbox-container">
                      <a href="#">
                        Black <span>3</span>
                      </a>
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label> */}
                  </div>
                </div>
                <div className="sidebar-wrapper checkbox size">
                  <h4 className="sidebar-title">Size</h4>
                  <div className="shop-checkbox">
                    <label className="checkbox-container">
                      <a href="#">
                        XL<span>4</span>
                      </a>
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>

                    <label className="checkbox-container">
                      <a href="#">
                        L<span>5</span>
                      </a>
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>

                    <label className="checkbox-container">
                      <a href="#">
                        SM<span>6</span>
                      </a>
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="checkbox-container">
                      <a href="#">
                        XXL<span>7</span>
                      </a>
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
                <div className="sidebar-wrapper tag">
                  <h4 className="sidebar-title">Popular Tags</h4>
                  <ul className="tags">
                    <li>
                      <a href="#">Clothing</a>
                    </li>
                    <li>
                      <a href="#">Accessories</a>
                    </li>
                    <li>
                      <a href="#">For Men</a>
                    </li>
                    <li>
                      <a href="#">Women</a>
                    </li>
                    <li>
                      <a href="#">Fashion</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopPage;
