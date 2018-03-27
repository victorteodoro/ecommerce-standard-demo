import React from 'react';

import {
  Header,
  Footer,
  CartProducts,
  PurchaseSummary
} from '../../components/';

import styles from './styles.css';

const CartScreen = props => (
  <div className={styles.generalContainer}>
    <Header />
    <CartProducts />
    <PurchaseSummary type={props.type} />
    <Footer />
  </div>
);

export default CartScreen;
