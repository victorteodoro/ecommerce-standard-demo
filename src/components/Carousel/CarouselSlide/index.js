import React from 'react';

import styles from './styles.css';

const CarouselSlide = props => (
  <li>
    <img
       alt={`Produto ${props.index}`}
       src={`http://placehold.it/1000x400/${props.color}/ffffff/&text=slide${props.index + 1}`}
       className={props.index === props.activeIndex
       ? `${styles.slide} ${styles.slideActive}`
       : styles.slide} />
  </li>
);

export default CarouselSlide;
