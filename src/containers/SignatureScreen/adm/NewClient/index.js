import React from 'react';
// import { Link } from 'react-router-dom';

import {
  Header,
  Footer,
  NewSignatureMundiForm
} from '../../../../components';

// Importing components
// import UserCardsArea from '../../../UserCardsArea/';
// import CardsArea from '../../../CardsArea/';

// Importing assets
// import inputs from '../../../../resources/SignatureScreen/inputs';

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
