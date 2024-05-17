import React from "react";
import "./Portfolios.css";
import Gallery from "../../component/Gallery/Gallery";
import Footer from "../../component/Footer/Footer";
export default function Portfolios() {
  return (
    <div className="portfolios">
      {/* portfolio header */}
      <section className="portfolios-header">
        <img
          className="portfolio-header__img"
          alt="img"
          src="./img/swiper6.jpg"
        />
        <div className="portfolio-header__text">
          <span className="portfolios-header__title">
            Explore
          </span>
          <p className="portfolios-header__subtitle">MY PORTFOLIO</p>
        </div>
      </section>

      {/* portfolio gallery */}
      <section className="portfolio-gallery">
        <p className="portfolio-gallery__description">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque.
        </p>
        <Gallery/>

        <button  className="portfolio-gallery__btn">Load More</button>
      </section>
      {/* portfolio gallery  footer*/}
      <Footer/>
    </div>
  );
}
