import React from 'react';
import { map, addIndex } from 'ramda';

import {
  Header,
  Footer,
  RotatingCard
} from '../../components/';

// Importing components
import CardsArea from '../CardsArea/';

// Importing assets
import inputEcommerce from '../../resources/InventoryScreen/inputs/indexEcommerce';
import inputMarketplace from '../../resources/InventoryScreen/inputs/indexMarketplace';

// Importing styles
import styles from './styles.css';

const mapIndexed = addIndex(map);

const populateCards = (input, index) => (
  <RotatingCard key={index} inputs={input} />
);

const chooseInput = (type) => {
  if (type === 'marketplace') {
    return inputMarketplace;
  }
  return inputEcommerce;
};

const InventoryScreen = props => (
    <div className={styles.generalContainer}>
      <Header type={props.type} />
      <CardsArea inputs={chooseInput(props.type)}>
      {
        mapIndexed(populateCards, chooseInput(props.type))
      }
      </CardsArea>
      <Footer />
    </div>
);

export default InventoryScreen;
