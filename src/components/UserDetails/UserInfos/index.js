// General imports from libs
import React from 'react';

// Import styles
import styles from './styles.css';

const UserInfos = () => (
  <div className={styles.userInfos}>
    <div className={styles.titleInfos}>Sobre</div>
    <div className={styles.labelInfos}>Nome:</div>
    <div className={styles.contentInfos}>Lucas</div>
    <div className={styles.labelInfos}>E-mail:</div>
    <div className={styles.contentInfos}>lucas.lima@stone.com.br</div>
    <div className={styles.labelInfos}>Nascimento:</div>
    <div className={styles.contentInfos}>13/09/1994</div>
    <div className={styles.labelInfos}>CPF:</div>
    <div className={styles.contentInfos}>422.385.577-06</div>
    <div className={styles.labelInfos}>Usuário desde:</div>
    <div className={styles.contentInfos}>26/06/2018</div>
    <div className={styles.labelInfos}>Registro:</div>
    <div className={styles.contentInfos}>11235813</div>
  </div>
);

export default UserInfos;
