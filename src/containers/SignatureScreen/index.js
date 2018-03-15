import React from 'react';

import {
  Header,
  Footer,
  PlansArea,
} from '../../components/';

import CardsArea from '../CardsArea/';

import styles from './styles.css';

const SignatureScreen = () => (
// const SignatureScreen = ({ planList }) => (
  <div className={styles.generalContainer}>
    <Header />
    {/* <PlansArea /> */}
    <CardsArea />
    {/* <PlansArea planList={planList}/> */}
    <Footer />
  </div>
);

export default SignatureScreen;
