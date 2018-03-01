// General imports from libs
import React from "react";

const Carousel = () => (
  <div className="carrousel" id="carrousel">
    <div className="carrousel-images" id="carrousel-images">
      <img
        src="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-22805.jpg"
        alt=""
        className="carrouselSlides"
      />
      <img
        src="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-581613.jpg"
        alt=""
        className="carrouselSlides"
      />
      <img
        src="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-496142.png"
        alt=""
        className="carrouselSlides"
      />
      <img
        src="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-579281.jpg"
        alt=""
        className="carrouselSlides"
      />
    </div>
    <button type="button" className="prev">
      &lt;
    </button>
    <button type="button" className="next">
      &gt;
    </button>
    <div className="bolitas" id="bolitas">
      <div className="bolita activa" />
      <div className="bolita" />
      <div className="bolita" />
      <div className="bolita" />
    </div>
  </div>
);

export default Carousel;
