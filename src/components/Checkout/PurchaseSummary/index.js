// General imports from libs
import React from 'react';

// Import styles
import styles from './styles.css';

const PurchaseSummary = () => (
  <div className={styles.purchaseSummaryCheckout}>
    <div className={styles.purchaseSummaryTitle}>Dados da compra</div>
    <div className={styles.totalAmountLabel}>Valor da compra</div>
    <div className={styles.totalAmountValue}>R$ 960,00</div>
    <div className={styles.shippingCostLabel}>Frete</div>
    <div className={styles.shippingCostValue}>Grátis</div>
    <span className={styles.dividingLine}></span>
    <div className={styles.totalWithShippingLabel}>Total a pagar</div>
    <div className={styles.totalWithShippingValue}>R$ 960,00</div>
    <div className={styles.discountedPriceLabel}>No boleto</div>
    <div className={styles.discountedPriceValue}>R$ 864,00</div>
  </div>
);

export default PurchaseSummary;
