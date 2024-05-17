import React from 'react'
import Footer from '../../component/Footer/Footer'
import {  GallerySuggested } from "../../data.js";

import "./Services.css"
export default function Services() {
  return (
    <div className="services">
      {/* portfolio header */}
      <section className="services-header">
        <img
          className="services-header__img"
          alt="img"
          src="./img/swiper5.jpg"
        />
        <div className="services-header__text">
          <span className="services-header__title">
            Explore
          </span>
          <p className="services-header__subtitle">SERVICES</p>
        </div>
      </section>

      {/* start Suggested section */}

      <div className="landing-suggested">
          <h2 className="landing-suggested__title">I do for you</h2>
          <div className="landing-suggested__container">
            {GallerySuggested.map((data) => (
              <div className="landing-suggested__box">
                <img src={data.img} className="landing-suggested__box-img" />
                <div className="landing-suggested__box-description">
                  <h2 className="landing-suggested__box-title">{data.title}</h2>
                  <p className="landing-suggested__box-subtitle">
                    {data.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* End Suggested section */}

        {/* Start Choose a plan section */}
        <div className="landing-plan-section">
          <h2 className="landing-plan__title">Choose a plan that suit you</h2>
          <div className="landing-plan__content">
            <div className="landing-plan__box">
              <button className="landing-plan__box-btn-category">
                Photography
              </button>
              <span className="landing-plan-price">$ 400 USD</span>
              <p className="landing-plan-description">
                Sed ut perspiciatis unde omnis iste. Natus error sit voluptatem.
                Accusantium Doloremque lauda Totam rem aperiam. Eaque ipsa quae.
              </p>

              <button className="landing-plan__btn-choosePlan">
                CHOOSE THIS PLAN
              </button>
            </div>
            <div className="landing-plan__box">
              <button className="landing-plan__box-btn-category">
                Photography
              </button>
              <span className="landing-plan-price">$ 400 USD</span>
              <p className="landing-plan-description">
                Sed ut perspiciatis unde omnis iste. Natus error sit voluptatem.
                Accusantium Doloremque lauda Totam rem aperiam. Eaque ipsa quae.
              </p>

              <button className="landing-plan__btn-choosePlan">
                CHOOSE THIS PLAN
              </button>
            </div>
            <div className="landing-plan__box">
              <button className="landing-plan__box-btn-category">
                Photography
              </button>
              <span className="landing-plan-price">$ 400 USD</span>
              <p className="landing-plan-description">
                Sed ut perspiciatis unde omnis iste. Natus error sit voluptatem.
                Accusantium Doloremque lauda Totam rem aperiam. Eaque ipsa quae.
              </p>

              <button className="landing-plan__btn-choosePlan">
                CHOOSE THIS PLAN
              </button>
            </div>
          </div>
        </div>
        {/* End Choose a plan section */}
     
       
      <Footer/>
    </div>
  )
}
