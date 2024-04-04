import React from "react";

const Header = () => {
  return (
    <div className="wrapper d-flex flex-column bg-light">
      <header className="header header-sticky">
        <div className="container-fluid">
          <ul className="header-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fa-solid fa-arrow-right-from-bracket pe-2"></i>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
