// General imports from libs
import React from 'react';

// Import styles
import styles from './styles.css';

const PurchaseSummary = () => (
  <section styles={styles.purchaseSummary}>
    <div styles={styles.purchaseSummaryActions}>
      <button className="btn btnRed">
        Continuar comprando
      </button>
      <button className="btn btnRed">
        Finalizar compra
      </button>
    </div>
    <div styles={styles.purchaseSummaryDetails}>
      <div styles={styles.productCostDetail}>
        <p styles={styles.productName}>1. Smartphone Motorola G5S</p>
        <p styles={styles.productCost}>R$ 960,00</p>
      </div>
      <div styles={styles.productCostDetail}>

      </div>
      <div styles={styles.productCostDetail}>

      </div>
      <div styles={styles.productShippingCost}>

      </div>
      <div styles={styles.productTotalCost}>

      </div>
    </div>
  </section>
);

export default PurchaseSummary;
