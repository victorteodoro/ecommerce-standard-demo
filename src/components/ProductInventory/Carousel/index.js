// General imports from libs
import React from "react";
import Slider from 'react-slick';

// Import styles
import styles from './styles.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const Carousel = () => (
  <div styles={styles.carrousel} id="carrousel">
    <Slider {...settings}>
      <div><h3>1</h3></div>
      <div><h3>2</h3></div>
      <div><h3>3</h3></div>
      <div><h3>4</h3></div>
      <div><h3>5</h3></div>
      <div><h3>6</h3></div>
    </Slider>
  </div>
);

export default Carousel;
