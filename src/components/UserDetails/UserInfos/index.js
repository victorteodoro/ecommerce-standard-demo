// General imports from libs
import React from 'react';

// Import styles
import styles from './styles.css';

const UserInfos = props => (
  <div className={styles.userInfos}>
    <div className={styles.titleInfos}>Sobre</div>
    <div className={styles.labelInfos}>Nome:</div>
    <div className={styles.contentInfos}>{props.customerInfos.name}</div>
    <div className={styles.labelInfos}>E-mail:</div>
    <div className={styles.contentInfos}>{props.customerInfos.email}</div>
    <div className={styles.labelInfos}>Nascimento:</div>
    <div className={styles.contentInfos}>{props.customerInfos.birthDate}</div>
    <div className={styles.labelInfos}>CPF:</div>
    <div className={styles.contentInfos}>{props.customerInfos.document}</div>
    <div className={styles.labelInfos}>Usuário desde:</div>
    <div className={styles.contentInfos}>{props.customerInfos.userSince}</div>
    <div className={styles.labelInfos}>Registro:</div>
    <div className={styles.contentInfos}>{props.customerInfos.userCode}</div>
  </div>
);

export default UserInfos;
