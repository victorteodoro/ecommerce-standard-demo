import React from 'react';

import {
  Header,
  Footer,
  // PurchaseSummaryNew,
  UserInfos,
  UserHeader,
  SignatureInfos
} from '../../../../../components/';

import styles from './styles.css';

const AdmClientsIdScreen = () => (
  <div className={styles.generalContainer}>
    <Header />
    <UserHeader />
    <UserInfos />
    <SignatureInfos />
    <Footer />
  </div>
);

// console.log(props.id.match.params.id)
export default AdmClientsIdScreen;
