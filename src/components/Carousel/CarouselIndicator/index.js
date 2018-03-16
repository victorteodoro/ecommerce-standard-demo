import React from 'react';

import styles from './styles.css';

const CarouselIndicator = (props) => (
  <li>
    <a 
       className={
         props.index === props.activeIndex
           ? `${styles.indicator} ${styles.indicatorActive}`
           : styles.indicator
       }
       onClick={props.onClick}
       >{""}</a>
  </li>
);

export default CarouselIndicator;
