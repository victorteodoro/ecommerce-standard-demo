// General imports from libs
import React from 'react';
import { Link } from 'react-router-dom';

// Import styles
import styles from './styles.css';

const PurchaseSummary = () => (
  <section className={styles.purchaseSummary}>
    <div className={styles.purchaseSummaryActions}>
      <button className={`${styles.btn} ${styles.btnWhite}`}>
        Continuar compra
      </button>
      <Link to='/ecommerce/checkout'>
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
