import React from 'react';
import { Link } from 'react-router-dom';
import { map, addIndex } from 'ramda';

import {
  Header,
  Footer,
  FrontCard
} from '../../components/';

import CardsArea from '../CardsArea/';
import styles from './styles.css';
import infos from '../../resources/LandScreen/inputs';

const mapIndexed = addIndex(map);

const populateCards = (input, index) => (
  <Link key={index} to={input.path}>
    <FrontCard key={index} inputs={input} />
  </Link>
);

const LandScreen = props => (
  <div className={styles.generalContainer}>
    <Header type={props.type} />

    <CardsArea inputs={infos}>
      {
        mapIndexed(populateCards, infos)
      }
    </CardsArea>

    {/* <CardsArea inputs={infos}>
      <Link to='/ecommerce'>
        <FrontCard inputs={infos} />
      </Link>
      <Link to='/marketplace'>
        <FrontCard inputs={infos} />
      </Link>
      <Link to='/signature/adm/clients'>
        <FrontCard inputs={infos} />
      </Link>

    </CardsArea> */}
    <Footer />
  </div>
);

export default LandScreen;
