import React from 'react';
import { Link } from "react-router-dom";

export const BurgerMenu = ({isOpen, closeBurger}) => {

  return (
    <>
      <div className="main-body-overlay">
        <div
          className={`body-overlay ${
            isOpen ? "overlayActive" : "body-overlay"
          }`}
          id="body-overlay"
        ></div>
      </div>
      <div
        id="burger-menu"
        className={`burger-menu ${isOpen ? "burgerActive" : "burger-menu"}`}
      >
        <div
          id="burger-menu-close"
          className="burger-menu-close"
          onClick={closeBurger}
        >
          <i className="fa-solid fa-xmark"></i>
        </div>
        <div className="burger-menu-input d-flex align-items-center">
          <input
            className="fs-8"
            type="form form-control"
            placeholder="Search entire store..."
          />
          <i className="fa-solid fa-magnifying-glass fs-6"></i>
        </div>
        <hr className="mt-5" />
        <div className="burger-menu-list-menu-container">
          <ul className="burger-menu-list-menu d-flex flex-column gap-3">
            <li
              className="burger-menu-list-menu-item"
              id="burger-menu-list-menu-item"
            >
              <div
                id="burger-list-item"
                className="burger-list-item w-100 d-flex justify-content-between align-items-center"
              >
                <Link to={"/"}>Home</Link>
                <span id="plus">
                  <i className="fa-solid fa-plus fs-6"></i>
                </span>
                <span className="plusMinusActive" id="minus">
                  <i className="fa-solid fa-minus"></i>
                </span>
              </div>
              <div className="burger-dropdown " id="burger-dropdown">
                <ul className="burger-dropdown-menu d-flex flex-column gap-2 p-4">
                  <li className="burger-dropdown-menu-list">Home Version 1</li>
                  <li className="burger-dropdown-menu-list">Home Version 1</li>
                  <li className="burger-dropdown-menu-list">Home Version 1</li>
                  <li className="burger-dropdown-menu-list">Home Version 1</li>
                  <li className="burger-dropdown-menu-list">Home Version 1</li>
                  <li className="burger-dropdown-menu-list">Home Version 1</li>
                  <li className="burger-dropdown-menu-list">Home Version 1</li>
                  <li className="burger-dropdown-menu-list">Home Version 1</li>
                </ul>
              </div>
            </li>
            <li className="burger-menu-list-menu-item ">
              <div
                id="burger-list-item"
                className="burger-list-item w-100 d-flex justify-content-between align-items-center"
              >
                <Link to={"shop"}>Shop</Link>
                <span id="plus">
                  <i className="fa-solid fa-plus fs-6"></i>
                </span>
                <span className="plusMinusActive" id="minus">
                  <i className="fa-solid fa-minus"></i>
                </span>
              </div>
              <div className="burger-dropdown">
                <ul className="burger-dropdown-menu d-flex flex-column gap-2 p-4">
                  <li className="burger-dropdown-menu-list">Home Version 1</li>
                  <li className="burger-dropdown-menu-list">Home Version 1</li>
                  <li className="burger-dropdown-menu-list">Home Version 1</li>
                  <li className="burger-dropdown-menu-list">Home Version 1</li>
                  <li className="burger-dropdown-menu-list">Home Version 1</li>
                  <li className="burger-dropdown-menu-list">Home Version 1</li>
                  <li className="burger-dropdown-menu-list">Home Version 1</li>
                  <li className="burger-dropdown-menu-list">Home Version 1</li>
                </ul>
              </div>
            </li>
            <li className="burger-menu-list-menu-item ">
              <div
                id="burger-list-item"
                className="burger-list-item w-100 d-flex justify-content-between align-items-center"
              >
                <a href="#">Pages</a>
                <span id="plus">
                  <i className="fa-solid fa-plus fs-6"></i>
                </span>{" "}
                <span className="plusMinusActive" id="minus">
                  <i className="fa-solid fa-minus"></i>
                </span>
              </div>
              <div className="burger-dropdown">
                <ul className="burger-dropdown-menu d-flex flex-column gap-2 p-4">
                  <li className="burger-dropdown-menu-list">Home Version 1</li>
                  <li className="burger-dropdown-menu-list">Home Version 1</li>
                  <li className="burger-dropdown-menu-list">Home Version 1</li>
                  <li className="burger-dropdown-menu-list">Home Version 1</li>
                  <li className="burger-dropdown-menu-list">Home Version 1</li>
                  <li className="burger-dropdown-menu-list">Home Version 1</li>
                  <li className="burger-dropdown-menu-list">Home Version 1</li>
                  <li className="burger-dropdown-menu-list">Home Version 1</li>
                </ul>
              </div>
            </li>
            <li className="burger-menu-list-menu-item ">
              <div
                id="burger-list-item"
                className="burger-list-item w-100 d-flex justify-content-between align-items-center"
              >
                <a href="#">Blog</a>
                <span id="plus">
                  <i className="fa-solid fa-plus fs-6"></i>
                </span>
                <span className="plusMinusActive" id="minus">
                  <i className="fa-solid fa-minus"></i>
                </span>
              </div>
              <div className="burger-dropdown">
                <ul className="burger-dropdown-menu d-flex flex-column gap-2 p-4">
                  <li className="burger-dropdown-menu-list">Home Version 1</li>
                  <li className="burger-dropdown-menu-list">Home Version 1</li>
                  <li className="burger-dropdown-menu-list">Home Version 1</li>
                  <li className="burger-dropdown-menu-list">Home Version 1</li>
                  <li className="burger-dropdown-menu-list">Home Version 1</li>
                  <li className="burger-dropdown-menu-list">Home Version 1</li>
                  <li className="burger-dropdown-menu-list">Home Version 1</li>
                  <li className="burger-dropdown-menu-list">Home Version 1</li>
                </ul>
              </div>
            </li>

            <li className="burger-menu-list-menu-item d-flex justify-content-between align-items-center">
              <Link to={"contact"}>Contact Us</Link>
            </li>
          </ul>
        </div>
        <hr className="mt-5" />

        <div className="burger-menu-list-footer-container">
          <ul className="burger-menu-list-footer d-flex flex-column gap-3">
            <li className="burger-menu-list-menu-item d-flex justify-content-between align-items-center">
              <a href="#">Language</a>
              <span>
                <i className="fa-solid fa-chevron-down"></i>
              </span>
            </li>
            <li className="burger-menu-list-menu-item d-flex justify-content-between align-items-center">
              <a href="#">Currency</a>
              <span>
                <i className="fa-solid fa-chevron-down"></i>
              </span>
            </li>
            <li className="burger-menu-list-menu-item d-flex justify-content-between align-items-center">
              <a href="#">My Account</a>
              <span>
                <i className="fa-solid fa-chevron-down"></i>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}


