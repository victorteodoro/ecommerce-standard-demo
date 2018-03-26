import React from 'react';

import {
  Header,
  Footer,
  PurchaseAndShippingSummary,
  PaymentDetails
} from '../../components/';

// import inputs from '../../resources/CheckoutScreen/inputs/';

import styles from './styles.css';

const CheckoutScreen = props => (
  <div className={styles.generalContainer}>
    <Header />
    <PurchaseAndShippingSummary />
    <PaymentDetails type={props.type} />
    <Footer />
  </div>
);

export default CheckoutScreen;
