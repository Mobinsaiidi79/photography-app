import React from "react";
import { GalleryImg } from "../../data.js";

import "./Gallery.css";
export default function Gallery() {
  return (
    <div className="landing-gallery">
      {GalleryImg.map((data) => (
        <div className="landing-gallery__box">
          <p className="landing-gallery__description">
            Nature Beauty
            <br /> STREET SHOT
          </p>
          <img src={data.img} className="landing-gallery__box-img" />
        </div>
      ))}
    </div>
  );
}
