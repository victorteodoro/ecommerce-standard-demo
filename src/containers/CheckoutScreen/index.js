import React from 'react';

import {
  Header,
  Footer,
  PurchaseAndShippingSummary,
  PaymentDetailsEcommerce,
  PaymentDetailsMarketplace
} from '../../components/';

// import inputs from '../../resources/CheckoutScreen/inputs/';

import styles from './styles.css';

const typeSell = (props) => {
  if (props.type === 'marketplace') {
    return <PaymentDetailsMarketplace type={props.type} />;
  }
  return <PaymentDetailsEcommerce type={props.type} />;
};

const CheckoutScreen = props => (
  <div className={styles.generalContainer}>
    <Header />
    <PurchaseAndShippingSummary />
    {
      typeSell(props)
    }
    <Footer />
  </div>
);

export default CheckoutScreen;
