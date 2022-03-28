import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const [openMenu, setopenMenu] = useState(false);
  return (
    <>
      <header>
        <nav className="nav">
          <div className="logo">
            <h1>OnGameClips</h1>
          </div>
          <div className={`link_container ${openMenu ? "active" : ""}`}>
            <ul className="link_list">
              <Link to="/">
                <li className="menu_links">Home</li>
              </Link>
              <Link to="/blogs">
                <li className="menu_links">Blogs</li>
              </Link>
              <Link to="/about">
                <li className="menu_links">About Us</li>
              </Link>
              <Link to="/services">
                <li className="menu_links">Services</li>
              </Link>
              <Link to="/contact">
                <li className="menu_links">Contact Us</li>
              </Link>
            </ul>
            <div className="menu_toggle" onClick={() => setopenMenu(!openMenu)}>
              <i className="bx bx-menu"></i>
            </div>
          </div>
          <div className="button_container">
            <a href="#">Lets Get Started</a>
          </div>
        </nav>
        <hr />
      </header>
    </>
  );
};

export default Header;
