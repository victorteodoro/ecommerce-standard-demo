// General imports from libs
import React from 'react';

// Import styles
import styles from './styles.css';

const PurchaseSummary = () => (
  <section className={styles.purchaseSummary}>
    <div className={styles.purchaseSummaryDetails}>
      <div className={styles.productCostDetail}>
        <p className={styles.productName}>Sua compra foi concluída!</p>
      </div>
      <div className={styles.productCostDetail}>
        Agradecemos a preferência.
      </div>
    </div>
  </section>
);

export default PurchaseSummary;
