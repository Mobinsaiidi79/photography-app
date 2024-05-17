import React from 'react'
import {  GallerySuggested } from "../../data.js";
import Footer from '../../component/Footer/Footer.js';
import './About.css'

export default function About() {
  return (
    <div className="about">
    {/* portfolio header */}
    <section className="about-header">
      <img
        className="about-header__img"
        alt="img"
        src="./img/swiper4.jpg"
      />
      <div className="about-header__text">
        <span className="about-header__title">
          Explore
        </span>
        <p className="about-header__subtitle">ABOUT</p>
      </div>
    </section>

     {/* start author section */}

     <div className="landing-author">
          <div className="landing-author__box">
            <h2 className="landing-author__title">
              I Click Moment, that you love
            </h2>
            <p className="landing-author__subtitle">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta.
            </p>
            <img
              src="./img/signature.png"
              className="landing-author__signature"
            />
          </div>
          <div className="landing-author__box">
            <img src="./img/about1.jpg.webp" className="landing-author__img" />
          </div>
          <div className="landing-author__box">
            <span className="landing-author__number">08</span>
            <h2 className="landing-author__title">Years of Experience</h2>
            <p className="landing-author__subtitle">
              "A gray cat slinks past a wooden house. There’s has something a
              little intimidating attempting to describe.
            </p>
            <button className="landing-author__btn">MY Work</button>
          </div>
        </div>

        {/* end author section */}

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
