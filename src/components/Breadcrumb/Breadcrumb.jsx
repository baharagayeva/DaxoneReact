import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ pageTitle }) => {
  return (
    <>
      <section class="bg-section">
        <div class="d-flex justify-content-center align-items-center flex-column">
          <h2>{`${pageTitle} Page`}</h2>
          <p>
            <Link to={"/"}>Home</Link>
            <span class="ps-2 pe-2 fw-light">
              <i class="fa-solid fa-slash fa-rotate-90"></i>
            </span>
                      <span class="active">{ pageTitle}</span>
          </p>
        </div>
      </section>
    </>
  );
};

export default Breadcrumb;
