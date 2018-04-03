import React from 'react';

import {
  Header,
  Footer,
  NewSignatureMundiForm
} from '../../../../components';

// Importing styles
import styles from './styles.css';

const NewClientScreen = () => (
  <div className={styles.generalContainer}>
    <Header />
    <NewSignatureMundiForm />
    <Footer />
  </div>
);

export default NewClientScreen;
