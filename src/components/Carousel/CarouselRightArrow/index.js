import React from 'react';

import styles from './styles.css';

const CarouselRightArrow = (props) => (
  <a
     href="/"
     className={`${styles.arrow} ${styles.arrowRight}`}
     onClick={props.onClick}
     >
    <span className="fa fa-2x fa-angle-right" />
  </a>
);

export default CarouselRightArrow;
