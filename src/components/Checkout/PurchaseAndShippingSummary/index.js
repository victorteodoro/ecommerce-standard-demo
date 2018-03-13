// General imports from libs
import React from 'react';

// Import components
import PurchaseSummary from '../PurchaseSummary/';
import ShippingDetails from '../ShippingDetails/';

import styles from './styles.css';

const PurchaseAndShippingSummary = () => (
  <div className={styles.purchaseAndShippingSummary}>
    <PurchaseSummary />
    <ShippingDetails />
  </div>
);

export default PurchaseAndShippingSummary;
