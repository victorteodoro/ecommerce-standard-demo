import React from 'react';

import styles from './styles.css';

const CarouselLeftArrow = props => (
  <a
     href='/'
     className={`${styles.arrow} ${styles.arrowLeft}`}
     onClick={props.onClick}
     >
    <span className='fa fa-2x fa-angle-left' />
  </a>
);

export default CarouselLeftArrow;
