import React from 'react';
import logo1 from '../../assets/images/logo-1.webp';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-1">
          <div className="custom-container">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-md-5 mb-sm-4 mb-4">
                <img src={logo1} />
                <p className="icon-paragraph af text-start">Follow us:</p>
                <div className="footer-icons d-flex gap-3">
                  <a href="#">
                    <i className="footer-icon fa-brands fa-facebook-f p-2"></i>
                  </a>
                  <a href="#">
                    <i className="footer-icon fa-brands fa-twitter p-2"></i>
                  </a>
                  <a href="#">
                    <i className="footer-icon fa-brands fa-pinterest-p p-2"></i>
                  </a>
                  <a href="#">
                    <i className="footer-icon fa-brands fa-vimeo-v p-2"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-2 col-sm-6 col-12 mb-sm-4 mb-4">
                <ul>
                  <li>
                    <h3 className=" footer-header">USEFUL LINK</h3>
                  </li>
                  <li>
                    <a href="#" className="af hover-col">
                      {" "}
                      Shopping Cat
                    </a>
                  </li>
                  <li>
                    <a href="#" className="af hover-col">
                      {" "}
                      WIshlist
                    </a>
                  </li>
                  <li>
                    <Link to={"checkout"} className="af hover-col">
                      Checkout
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="af hover-col">
                      Support
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-2 col-sm-6 col-12 mb-sm-4 mb-4">
                <ul>
                  <li>
                    <h3 className=" footer-header">ABOUT US</h3>
                  </li>
                  <li>
                    <a href="#" className="af hover-col">
                      {" "}
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="af hover-col">
                      Products
                    </a>
                  </li>
                  <li>
                    <a href="#" className="af hover-col">
                      Terms and conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="af hover-col">
                      Help Center
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                <h3 className="footer-header">NEWSLETTER</h3>
                <p className="inp-paragraph af">
                  Subscribe to get all new updates
                </p>
                <div className="footer-inp">
                  <input type="email" placeholder="Enter your email" />
                  <i className="fa-solid fa-magnifying-glass fa-rotate-90 af hover-col"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-2 d-flex justify-content-center align-items-center w-100 p-0 m-0">
          <p className="af">
            Copyright ©{" "}
            <a href="#" className="hover-col af">
              Daxone
            </a>
            . All Right Reserved
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer