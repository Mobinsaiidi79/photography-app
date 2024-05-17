import React from 'react'

import Footer from '../../component/Footer/Footer'
import "./Contact.css"
export default function Contact() {
  return (
    <div className="about">
    {/* portfolio header */}
    <section className="Contact-header">
      <img
        className="Contact-header__img"
        alt="img"
        src="./img/about1.jpg.webp"
      />
      <div className="Contact-header__text">
        <span className="Contact-header__title">
          Explore
        </span>
        <p className="Contact-header__subtitle">CONTACT ME</p>
      </div>
    </section>

    <Footer/>
  </div>
  )
}
