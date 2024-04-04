import React from "react";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <div className="sidebar sidebar-dark sidebar-fixed" id="sidebar">
      <div className="sidebar-brand d-none d-md-flex">
        <h2>DAXONE</h2>
      </div>
      <ul className="sidebar-nav" data-coreui="navigation" data-simplebar="">
        <li className="nav-item">
          <Link className="nav-link" to="/admin">
            <i className="fa-solid fa-user-tie pe-3"></i>Admin
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="AdvertisementBanner">
            <i className="fa-solid fa-rectangle-ad pe-3"></i>Advertisement
            Banner
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="Category">
            <i className="fa-solid fa-layer-group pe-3"></i>Category
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="Color">
            <i className="fa-solid fa-palette pe-3"></i>Color
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="Product">
            <i className="fa-solid fa-chair pe-3"></i>Product
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="ProductStatus">
            <i className="fa-solid fa-car-battery pe-3"></i>ProductStatus
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="SeasonDiscount">
            <i className="fa-solid fa-tags pe-3"></i>SeasonDiscount
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="Size">
            <i className="fa-solid fa-expand pe-3"></i>Size
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="SubCategory">
            <i className="fa-solid fa-sitemap pe-3"></i>SubCategory
          </Link>
        </li>
      </ul>
      <button
        className="sidebar-toggler"
        type="button"
        data-coreui-toggle="unfoldable"
      ></button>
    </div>
  );
};

export default Aside;
