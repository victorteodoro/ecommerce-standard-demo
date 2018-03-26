import React from 'react';
import { map, addIndex } from 'ramda';

import {
  Header,
  Footer,
  // ProductArea
  RotatingCard
  // Carousel
} from '../../components/';

// Importing components
import CardsArea from '../CardsArea/';

// Importing assets
import inputs from '../../resources/InventoryScreen/inputs';

// Importing styles
import styles from './styles.css';

const mapIndexed = addIndex(map);

const populateCards = (input, index) => (
  <RotatingCard key={index} inputs={input} />
);

const InventoryScreen = () => (
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

export default InventoryScreen;
