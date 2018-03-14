import React from 'react';

import {
  Header,
  Footer,
  CartProducts,
  PurchaseSummary
} from '../../components/';

import styles from './styles.css';

const SignatureScreen = () => (
  <div className={styles.generalContainer}>
    <Header />
    <CartProducts />
    <PurchaseSummary />
    <Footer />
  </div>
);

export default SignatureScreen;
