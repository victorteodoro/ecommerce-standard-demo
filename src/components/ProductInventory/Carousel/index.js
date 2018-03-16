import React from 'react';
import { Carousel } from 'react-responsive-carousel';


// Import styles
import styles from './styles.css';

const RisottoCarousel = (props) => (
  <div className={styles.carousel}>
    <Carousel>
      {props.imgSrcs.map((color, index) => (
        <img
           src={`http://placehold.it/1000x400/${color}/ffffff/&text=Produto ${index + 1}`}
           alt={`Produto de cor ${color}`}
           key={color}
           />
      ))}
  </Carousel>
    </div>
);

export default RisottoCarousel;
