// General imports from libs
import React from "react";

// Import styles
import styles from './styles.css';

const Carousel = () => (
  <div styles={styles.carrousel} id="carrousel">
    <div className="carrousel-images" id="carrousel-images">
      <img
        src="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-22805.jpg"
        alt=""
        styles={styles.carrouselSlides}
      />
      <img
        src="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-581613.jpg"
        alt=""
        styles={styles.carrouselSlides}
      />
      <img
        src="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-496142.png"
        alt=""
        styles={styles.carrouselSlides}
      />
      <img
        src="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-579281.jpg"
        alt=""
        styles={styles.carrouselSlides}
      />
    </div>
    <button type="button" styles={styles.prev}>
      &lt;
    </button>
    <button type="button" styles={styles.next}>
      &gt;
    </button>
    <div styles={styles.bolitas} id="bolitas">
      <div className="bolita activa" />
      <div styles={styles.bolita} />
      <div styles={styles.bolita} />
      <div styles={styles.bolita} />
    </div>
  </div>
);

export default Carousel;
