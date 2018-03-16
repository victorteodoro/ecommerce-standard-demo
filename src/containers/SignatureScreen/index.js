import React from 'react';

import {
  Header,
  Footer,
  PlansArea,
} from '../../components/';

// Importing components
import CardsArea from '../CardsArea/';

//Importing assets
import inputs from '../../resources/SignatureScreen/inputs'

//Importing styles
import styles from './styles.css';

const SignatureScreen = () => (
  <div className={styles.generalContainer}>
    <Header />
    <CardsArea inputs={inputs}/>
    <Footer />
  </div>
);

export default SignatureScreen;
