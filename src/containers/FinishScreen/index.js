import React from 'react';

import {
  Header,
  Footer,
  CartProductsNew,
  PurchaseSummaryNew
} from '../../components/';

import styles from './styles.css';

const FinishScreen = props => (
  <div className={styles.generalContainer}>
    <Header type={props.type} />
    <CartProductsNew />
    <PurchaseSummaryNew />
    <Footer />
  </div>
);

export default FinishScreen;
