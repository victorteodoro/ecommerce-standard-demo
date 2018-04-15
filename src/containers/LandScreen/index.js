import React from 'react';

import {
  Header,
  Footer,
  CartProductsNew,
  PurchaseSummaryNew
} from '../../components/';

import styles from './styles.css';

const LandScreen = props => (
  <div className={styles.generalContainer}>
    <Header type={props.type} />
    <Link to='/ecommerce'>
      <button className={`${styles.btn} ${styles.btnWhite}`}>
        Ecommerce
      </button>
    </Link>
    <Link to='/marketplace'>
      <button className={`${styles.btn} ${styles.btnWhite}`}>
        Marketplace
      </button>
    </Link>
    <Footer />
  </div>
);

export default LandScreen;
