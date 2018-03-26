import React from 'react';

import {
  Header,
  Footer,
  CartProducts,
  PurchaseSummary
} from '../../components/';

import styles from './styles.css';

const log = (props) => {
  console.log(props);
};

const CartScreen = props => (
  <div className={styles.generalContainer} log={log(props)}>
    <Header />
    <CartProducts />
    <PurchaseSummary type={props.type} />
    <Footer />
  </div>
);

export default CartScreen;
