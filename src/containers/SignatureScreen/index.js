import React from 'react';
import { map, addIndex } from 'ramda';

import {
  Header,
  Footer,
  // FrontCard,
  // BackCard,
  RotatingCard
} from '../../components/';

// Importing components
import CardsArea from '../CardsArea/';

// Importing assets
import inputs from '../../resources/SignatureScreen/inputs';

// Importing styles
import styles from './styles.css';

const mapIndexed = addIndex(map);

const populateCards = input => (
    <RotatingCard inputs={input} />
);

const SignatureScreen = () => (
  <div className={styles.generalContainer}>
    <Header />
    <CardsArea inputs={inputs}>
    {
      mapIndexed(populateCards, inputs)
    }
    </CardsArea>
    <Footer />
  </div>
);

export default SignatureScreen;
