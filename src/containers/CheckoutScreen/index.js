import React from 'react';

import {
  Header,
  Footer,
  PurchaseAndShippingSummary,
  PaymentDetails
} from '../../components/';

import styles from './styles.css';

const CheckoutScreen = () => (
  <div className={styles.generalContainer}>
    <Header />
    <PurchaseAndShippingSummary />
    <PaymentDetails />
    <Footer />
  </div>
);

export default CheckoutScreen;
