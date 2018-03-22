import React from 'react';
import { map, addIndex } from 'ramda';

import {
  Header,
  Footer,
  UserCard
  // FrontCard
  // BackCard,
  // RotatingCard
} from '../../components/';

// Importing components
import CardsArea from '../CardsArea/';

// Importing assets
import inputs from '../../resources/SignatureScreen/inputs';

// Importing styles
import styles from './styles.css';

const mapIndexed = addIndex(map);

const populateCards = (input, index) => (
    <UserCard key={index} inputs={input} />
);

const SignatureScreen = () => (
  <div className={styles.generalContainer}>
    <button className={styles.btnRed}>ola</button>
    <Header />
    <CardsArea inputs={inputs} type='user'>
    {
      mapIndexed(populateCards, inputs)
    }
    </CardsArea>
    <Footer />
  </div>
);

export default SignatureScreen;
