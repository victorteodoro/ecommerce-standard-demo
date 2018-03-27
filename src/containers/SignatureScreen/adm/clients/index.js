import React from 'react';
import { map, addIndex } from 'ramda';
import { Link } from 'react-router-dom';

import {
  Header,
  Footer,
  UserCard,
  SearchBarAndButton
  // FrontCard
  // BackCard,
  // RotatingCard
} from '../../../../components';

// Importing components
import UserCardsArea from '../../../UserCardsArea/';
// import CardsArea from '../../../CardsArea/';

// Importing assets
import inputs from '../../../../resources/SignatureScreen/inputs';

// Importing styles
import styles from './styles.css';

const mapIndexed = addIndex(map);

const populateCards = (input, index) => (
  // console.log(index, input.shortSpecs.match(/[0-9]+/).toString())
  // const path = '/signature/adm/clients' + input.shortSpecs.match(/[0-9]+/),
  <Link to={`/signature/adm/clients/${input.shortSpecs.match(/[0-9]+/).toString()}`}>
    <UserCard key={index} inputs={input} />
  </Link>
);

const AdmClientsScreen = () => (
  <div className={styles.generalContainer}>
    <Header />
    <SearchBarAndButton />
    <UserCardsArea inputs={inputs} type='user'>
    {
      mapIndexed(populateCards, inputs)
    }
    </UserCardsArea>
    <Footer />
  </div>
);

export default AdmClientsScreen;
