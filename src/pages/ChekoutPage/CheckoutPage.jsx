import React, { useState } from "react";
import paypal from "../../assets/images/payment.webp";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

export const CheckoutPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);

  const changeAccordion = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  const changeAccordion1 = () => {
    if (isOpen1) {
      setIsOpen1(false);
    } else {
      setIsOpen1(true);
    }
  };

  return (
    <>
      <Breadcrumb pageTitle={"Checkout"} />

      <section className="checkout-page mt-5">
        <div className="container">
          <div className="checkout-accordion1" id="checkout-accordion1">
            <div className="checkout-accordion1-title d-flex align-items-center gap-3">
              <i className="fa-regular fa-circle-check"></i>
              <p>
                Returning customer?
                <span
                  id="checkout-click"
                  className="checkout-click"
                  onClick={changeAccordion}
                >
                  {" "}
                  Click here to login
                </span>
              </p>
            </div>

            <div
              className={`checkout-accordion-body  mt-3 ${
                isOpen
                  ? "checkout-accordion-body accordionNotActive mt-3"
                  : "checkout-accordion-body mt-3"
              }`}
              id="checkout-accordion-body"
            >
              <p>
                If you have shopped with us before, please enter your details in
                the boxes below. If you are a new customer, please proceed to
                the Billing & Shipping section.
              </p>

              <div className="checkout-inputs d-flex justify-content-between align-items-center gap-4 mt-3">
                <div className="checkout-inputs-username w-50">
                  <h5>Username Or Email Address</h5>
                  <input className="form form-control" type="text" />
                </div>
                <div className="checkout-inputs-password w-50">
                  <h5>Password</h5>
                  <input className="form form-control" type="text" />
                </div>
              </div>

              <div className="checkout-login d-flex mt-3 gap-4">
                <button className="btn btn-danger">Login</button>

                <div className="checkout-login-checkbox d-flex align-items-center gap-2">
                  <input type="checkbox" />

                  <p>Remember me</p>
                </div>
              </div>

              <div className="checkout-social mt-3">
                <p>Lost your password?</p>

                <p className="mt-3">Login with:</p>

                <div className="checkout-social-buttons mt-3 d-flex gap-3">
                  <div className="social-button">FACEBOOK</div>
                  <div className="social-button">TWITTER</div>
                  <div className="social-button">GOOGLE</div>
                </div>
              </div>
            </div>
          </div>
          <div className="checkout-accordion1  mt-3" id="checkout-accordion1">
            <div className="checkout-accordion1-title d-flex align-items-center gap-3">
              <i className="fa-regular fa-circle-check"></i>
              <p>
                Have a coupon?
                <span
                  id="checkout-click"
                  className="checkout-click"
                  onClick={changeAccordion1}
                >
                  {" "}
                  Click here to enter your code
                </span>
              </p>
            </div>
            <div
              className={`checkout-accordion-body  mt-3 ${
                isOpen1
                  ? "checkout-accordion-body accordionNotActive mt-3"
                  : "checkout-accordion-body mt-3"
              }`}
              id="checkout-accordion-body"
            >
              <div className="checkout-accordion-coupon d-flex align-items-center gap-2">
                <input
                  className="form form-control w-50"
                  type="text"
                  placeholder="Coupon code"
                />
                <button className="btn">APPLY COUPON</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="checkout-form mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 col-sm-12 col-12">
              <h5>BILLING DETAILS</h5>

              <div className="checkout-form-line"></div>

              <div className="checkout-form-name d-flex flex-column flex-sm-column flex-md-row flex-lg-row gap-4 mt-3">
                <div className="checkout-form-input w-100 mt-3">
                  <p>First Name</p>
                  <input className="w-100" type="text" />
                </div>

                <div className="checkout-form-input w-100 mt-3">
                  <p>Last Name</p>
                  <input className="w-100" type="text" />
                </div>
              </div>

              <div className="checkout-form-input mt-3">
                <p>Company Name</p>
                <input className="w-100" type="text" />
              </div>

              <div className="checkout-form-input mt-3">
                <p>Country</p>
                <select name="" id="" className="w-100">
                  <option value="">Select Country:</option>
                  <option value="">Azerbaijan</option>
                  <option value="">Turkey</option>
                  <option value="">Georgia</option>
                </select>
              </div>

              <div className="checkout-form-input mt-3">
                <p>Street Address</p>
                <input
                  className="w-100 "
                  type="text"
                  placeholder="House Number"
                />
                <input
                  className="w-100 mt-3"
                  type="text"
                  placeholder="Apartment"
                />
              </div>

              <div className="checkout-form-input mt-3">
                <p>State/Country</p>
                <input className="w-100 " type="text" />
              </div>

              <div className="checkout-form-input mt-3">
                <p>PostCode/ZipCode</p>
                <input className="w-100 " type="text" />
              </div>

              <div className="checkout-form-input mt-3">
                <p>Phone</p>
                <input className="w-100 " type="text" />
              </div>

              <div className="checkout-form-input mt-3">
                <p>Email Address</p>
                <input className="w-100 " type="text" />
              </div>

              <div className="checkout-login-checkbox d-flex align-items-center gap-2 mt-3">
                <input type="checkbox" />
                <p>Create an account</p>
              </div>

              <textarea
                style={{ border: "none", backgroundColor: "#E8EFF7" }}
                rows="6"
                name=""
                id="textarea"
                className="w-100 p-3 mt-3"
                placeholder="Your Notes..."
              ></textarea>
            </div>

            <div className="col-lg-5 col-md-12 col-sm-12 col-12">
              <div className="order-checkout p-5">
                <div className="order-title">
                  <h5>Your order</h5>
                  <div className="order-line"></div>
                </div>

                <div className="order-product  mt-5">
                  <div className="product-total">
                    <p style={{ fontSize: "14px", fontWeight: "bold" }}>
                      PRODUCT
                    </p>

                    <p style={{ color: "#FF6541" }}>TOTAL</p>
                  </div>

                  <div className="product-name">
                    <div className="product-price mt-2">
                      <p>Product Name X 1</p>

                      <p>$329</p>
                    </div>

                    <div className="product-price mt-2">
                      <p>Product Name X 1</p>

                      <p>$329</p>
                    </div>
                  </div>

                  <div className="product-total">
                    <p style={{ fontSize: "14px", fontWeight: "bold" }}>
                      SUBTOTAL
                    </p>

                    <p style={{ color: "#FF6541" }}>$329</p>
                  </div>

                  <div className="product-total">
                    <p style={{ fontSize: "14px", fontWeight: "bold" }}>
                      SHIPPING
                    </p>

                    <p style={{ color: "#FF6541" }}>Enter your full address</p>
                  </div>

                  <div className="product-total">
                    <p style={{ fontSize: "14px", fontWeight: "bold" }}>
                      TOTAL
                    </p>

                    <p style={{ color: "#FF6541" }}>$273</p>
                  </div>

                  <div className="checkout-radio d-flex align-items-center gap-2 mt-3">
                    <input type="radio" />

                    <p>DIRECT BANK TRANSFER</p>
                  </div>

                  <p style={{ fontsize: "12px" }}>
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference.
                  </p>

                  <div className="checkout-payment">
                    <div className="checkout-radio d-flex align-items-center gap-2 mt-3">
                      <input type="radio" />

                      <p>CHECK PAYMENTS</p>
                    </div>

                    <div className="checkout-radio d-flex align-items-center gap-2 mt-3">
                      <input type="radio" />

                      <p>CASH ON DELIVERY</p>
                    </div>

                    <div className="checkout-radio d-flex align-items-center gap-2 mt-3">
                      <input type="radio" />

                      <p>PAYPAL</p>
                      <img style={{ width: "40%" }} src={paypal} alt="" />
                      <p style={{ fontSize: "12px" }}>
                        <a
                          style={{
                            textDecoration: "underline",
                            color: "black",
                          }}
                          href=""
                        >
                          WHAT IS PAYPAL?
                        </a>
                      </p>
                    </div>

                    <button className="btn btn-form mt-5 checkout-button">
                      PLACE ORDER
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
