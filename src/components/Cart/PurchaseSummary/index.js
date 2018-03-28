// General imports from libs
import React from 'react';
import { Link } from 'react-router-dom';

// Import styles
import styles from './styles.css';

const chooseType = (type) => {
  if (type === 'marketplace') {
    return '/marketplace/checkout';
  }
  return '/ecommerce/checkout';
};

const PurchaseSummary = props => (
  <section className={styles.purchaseSummary}>
    <div className={styles.purchaseSummaryActions}>
      <Link to='/'>
        <button className={`${styles.btn} ${styles.btnWhite}`}>
          Continuar compra
        </button>
      </Link>
      <Link to={chooseType(props.type)}>
        <button className={`${styles.btn} ${styles.btnWhite}`}>
          Finalizar compra
        </button>
      </Link>
    </div>
    <div className={styles.purchaseSummaryDetails}>
      <div className={styles.productCostDetail}>
        <p className={styles.productName}>1. Smartphone Motorola G5S</p>
        <p className={styles.productCost}>R$ 960,00</p>
      </div>
      <div className={styles.productCostDetail}>

      </div>
      <div className={styles.productCostDetail}>

      </div>
      <div className={styles.productShippingCost}>

      </div>
      <div className={styles.productTotalCost}>

      </div>
    </div>
  </section>
);

export default PurchaseSummary;
