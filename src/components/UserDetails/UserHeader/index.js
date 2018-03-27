// General imports from libs
import React from 'react';

// Import styles
import styles from './styles.css';
import userImg from '../../../resources/SignatureScreen/img/genericUserPicture.png';

const UserHeader = () => (
  <div className={styles.userHeader}>
    <div className={styles.userImg}>
      <img src={userImg} />
    </div>
    <div className={styles.userName}>Lucas Lima</div>
    <div className={styles.userId}>ID: 11235813</div>
    <div className={styles.userStatus}>Contrato Ativo</div>
  </div>
);

export default UserHeader;
