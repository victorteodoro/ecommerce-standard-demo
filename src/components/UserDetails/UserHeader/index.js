// General imports from libs
import React from 'react';

// Import styles
import styles from './styles.css';
import userImg from '../../../resources/SignatureScreen/img/genericUserPicture.png';

const UserHeader = props => (
  <div className={styles.userHeader}>
    <div className={styles.userImg}>
      <img src={userImg} />
    </div>
    <div className={styles.userName}>{props.customerInfos.name}</div>
    <div className={styles.userId}>ID: {props.customerInfos.userId}</div>
    <div className={styles.userStatus}>Contrato Ativo</div>
  </div>
);

export default UserHeader;
