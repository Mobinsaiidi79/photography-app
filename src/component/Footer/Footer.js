import React from "react";
import { MdOutlineCamera } from "react-icons/md";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* josanclick */}
        <div className="footer-josanclick">
          <div className="footer-josanclick__header">
            <MdOutlineCamera className="navbar-logo__icon" />
            <span className="navbar-logo__title">JOSANCLICK</span>
          </div>
          <div className="footer-josanclick__content">
            <p className="footer-josanclick__content-description">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
          </div>
          <div className="footer-josanclick__socialMedia-icons">
            <FaFacebookF className="footer-josanclick__icon" />
            <IoLogoInstagram className="footer-josanclick__icon" />
            <IoLogoTwitter className="footer-josanclick__icon" />
            <FaYoutube className="footer-josanclick__icon" />
          </div>
        </div>
        {/* Navigation */}
        <div className="footer-navigation">
          <div className="footer-navigation__header">
            <h2 className="">Navigation</h2>
          </div>

          <div className="footer-navigation__content">
            <ul className="footer-navigation__items">
              <Link to="/">
                <li className="footer-navigation__item">Home</li>
              </Link>
              <Link to="/portfolios">
                <li className="footer-navigation__item">Portfolios</li>
              </Link>
              <Link to="/services">
                <li className="footer-navigation__item">Services</li>
              </Link>
              <Link to="/about">
                <li className="footer-navigation__item">About</li>
              </Link>
              <Link to="/blog">
                <li className="footer-navigation__item">Blog</li>
              </Link>
              <Link to="/contact">
                <li className="footer-navigation__item">Contact</li>
              </Link>
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className="footer-navigation">
          <div className="footer-navigation__header">
            <h2 className="">Contact</h2>
          </div>

          <div className="footer-navigation__content">
            <ul className="footer-Contact__items">
              <Link to="/">
                <li className="footer-Contact__item">
                  87/A, Green lane, CA 6732
                </li>
              </Link>
              <Link to="/">
                <li className="footer-Contact__item">Real State</li>
              </Link>
              <Link to="/">
                <li className="footer-Contact__item">info@josanclick.com</li>
              </Link>
              <Link to="/">
                <li className="footer-Contact__item">+10 236 327 3782</li>
              </Link>
            </ul>
          </div>
        </div>

        {/* Subscribe Newsletter */}

        <div className="footer-Subscribe">
          <div className="footer-Subscribe__header">
            <h2 >Subscribe Newsletter</h2>
          </div>

          <div className="footer-Subscribe__content">
           <input type="text" className="footer-Subscribe__input" placeholder="Enter Your email"/>
           <button className="footer-Subscribe__btn">SUBSCRIBE</button>
          </div>
          
        </div>
      </div>

      <div className="footer-copyright__content">
            <p className="footer-copyright__content-description">Copyright ©2024 All rights reserved | This template is made with ❤ by Colorlib</p>
      </div>
    </footer>
  );
}
