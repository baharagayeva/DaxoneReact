import React from "react";
import Header from "../header/Header";
import Aside from "../aside/Aside";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="d-flex ">
        <div className="col-2">
          <Aside />
        </div>
        <div className=" ms-5 col-9">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
