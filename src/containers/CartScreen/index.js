import React from 'react';

import {
  Header,
  Footer,
  CartProducts,
  PurchaseSummary
} from '../../components/';

// Importing assets
import inputEcommerce from '../../resources/InventoryScreen/inputs/indexEcommerce';
import inputMarketplace from '../../resources/InventoryScreen/inputs/indexMarketplace';

import styles from './styles.css';

const chooseInput = (type) => {
  if (type === 'marketplace') {
    return inputMarketplace;
  }
  return inputEcommerce;
};

const CartScreen = props => (
  <div className={styles.generalContainer} >
    <Header type={props.type} />
    <CartProducts inputs={chooseInput(props.type)} />
    <PurchaseSummary type={props.type} />
    <Footer />
  </div>
);

export default CartScreen;
