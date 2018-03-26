import React from 'react';

import {
  Header,
  Footer,
  CartProductsNew,
  PurchaseSummaryNew
} from '../../components/';

import styles from './styles.css';

const FinishScreen = () => (
  <div className={styles.generalContainer}>
    <Header />
    <CartProductsNew />
    <PurchaseSummaryNew />
    <Footer />
  </div>
);

export default FinishScreen;
