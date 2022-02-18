import React, { useState, useEffect } from "react";
import { FiCode, FiMenu, FiX } from "react-icons/fi";
import "./Header.css";
function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(!false);

  useEffect(() => {
    if (click) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.background = "rgba(0,0,0,0.5)";
    } else {
      document.documentElement.style.overflow = "auto";
      document.body.style.background = "#fff";
    }
  });
  return (
    <div className="header">
      <div className="container">
        <div className="header-con">
          <div className="logo-container">
            <a href="#">
              Webpage <FiCode />
            </a>
          </div>
          <ul className={click ? "menu active" : "menu"}>
            <li className="menu-link" onClick={closeMobileMenu}>
              <a href="#">HOME</a>
            </li>
            <li className="menu-link" onClick={closeMobileMenu}>
              <a href="#">CONTACT</a>
            </li>
            <li className="menu-link" onClick={closeMobileMenu}>
              <a href="#">BLOG</a>
            </li>
          </ul>
          <div className="mobile-menu" onClick={handleClick}>
            {click ? <FiX /> : <FiMenu />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
