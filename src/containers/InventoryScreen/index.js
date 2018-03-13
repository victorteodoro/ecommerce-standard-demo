import React from 'react';

import {
  Header,
  Footer,
  ProductArea,
  PurchaseAndShippingSummary
} from '../../components/';

import styles from './styles.css';

const InventoryScreen = () => (
  <div className={styles.generalContainer}>
    <Header />
    <PurchaseAndShippingSummary />
    <ProductArea />
    <Footer />
  </div>
);

export default InventoryScreen;
