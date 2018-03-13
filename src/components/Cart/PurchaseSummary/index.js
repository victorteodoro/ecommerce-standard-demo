// General imports from libs
import React from 'react';

// Import styles
import styles from './styles.css';
console.log(styles);

const PurchaseSummary = () => (
  <section className={styles.purchaseSummary}>
    <div className={styles.purchaseSummaryActions}>
      <button className={`${styles.btn} ${styles.btnWhite}`}>
        Continuar compra
      </button>
      <button className={`${styles.btn} ${styles.btnWhite}`}>
        Finalizar compra
      </button>
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
