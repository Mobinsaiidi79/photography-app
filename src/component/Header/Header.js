import React, { useState } from "react";
import { MdOutlineCamera } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { RiMenu5Line } from "react-icons/ri";

import "./Header.css";
export default function Header() {
    const[showMenu , setShowMenu] =useState(false)
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/" className="navbar-logo__link">
            <MdOutlineCamera className="navbar-logo__icon" />
            <span className="navbar-logo__title">JOSANCLICK</span>
          </Link>
        </div>
        {/* web menu */}
        <div className="navbar-menu">
          <ul className="navbar-menu__items">
            <Link to="/">
              <li className="navbar-menu__item">Home</li>
            </Link>
            <Link to="/portfolios">
              <li className="navbar-menu__item">Portfolios</li>
            </Link>
            <Link to="/services">
              <li className="navbar-menu__item">Services</li>
            </Link>
            <Link to="/about">
              <li className="navbar-menu__item">About</li>
            </Link>
            <Link to="/blog">
              <li className="navbar-menu__item">Blog</li>
            </Link>
            <Link to="/contact">
              <li className="navbar-menu__item">Contact</li>
            </Link>
          </ul>
        </div>
          {/* mobile menu start*/}

      <div className="navbar-mobile">
        <div className="navbar-mobile__btn">
            <RiMenu5Line className="navbar-mobile__btn-icon" onClick={()=>setShowMenu(priv=> !priv)}/>
        </div>
        <div className={`navbar-menu__mobile ${showMenu?"showMenu" : ""}`}>
          <ul className="navbar-menu__mobile-items">
            <Link to="/">
              <li className="navbar-menu__mobile-item">Home</li>
            </Link>
            <Link to="/portfolios">
              <li className="navbar-menu__mobile-item">Portfolios</li>
            </Link>
            <Link to="/services">
              <li className="navbar-menu__mobile-item">Services</li>
            </Link>
            <Link to="/about">
              <li className="navbar-menu__mobile-item">About</li>
            </Link>
            <Link to="/blog">
              <li className="navbar-menu__mobile-item">Blog</li>
            </Link>
            <Link to="/contact">
              <li className="navbar-menu__mobile-item">Contact</li>
            </Link>
          </ul>
        </div>
      </div>

       {/* mobile menu finish*/}
        <div className="navbar-socialMedia__icons">
          <FaFacebookF className="navbar-socialMedia__icon" />
          <IoLogoInstagram className="navbar-socialMedia__icon" />
          <IoLogoTwitter className="navbar-socialMedia__icon" />
          <FaYoutube className="navbar-socialMedia__icon" />
        </div>
      </nav>

    
    </>
  );
}
