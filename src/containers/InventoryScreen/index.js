import React from 'react';

import {
  Header,
  Footer,
  ProductArea,
  Carousel
} from '../../components/';

import styles from './styles.css';

const InventoryScreen = props => (
  <div className={styles.generalContainer}>
    <Header />
    <Carousel slides={props.carouselImgs} />
    <ProductArea />
    <Footer />
  </div>
);

export default InventoryScreen;
