// General imports from libs
import React from 'react';

// Import styles
import styles from './styles.css';

const ShippingDetails = () => (
  <div className={styles.shippingDetails}>
    <div className={styles.shippingDetailsTitle}>Endereço de entrega</div>
    <div className={styles.customerName}>Victor Teodoro</div>
    <div className={styles.customerStreetAndNumber}>Rua Frederico Abranches, 104, ap. 53</div>
    <div className={styles.customerNeighborhood}>Vila Buarque</div>
    <div className={styles.customerCityAndState}>São Paulo - SP</div>
    <div className={styles.customerPostalCode}>CEP 01225-000</div>
  </div>
);

export default ShippingDetails;
