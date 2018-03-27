// General imports from libs
import React from 'react';

// Import styles
import styles from './styles.css';

const SignatureInfos = () => (
  <div className={styles.signatureInfos}>
    <div className={styles.signatureListTitle}>Assinaturas</div>
    <div className={styles.plan}>Plano:</div>
    <div className={styles.startDate}>Início:</div>
    <div className={styles.endDate}>Fim:</div>
    <div className={styles.amount}>Valor:</div>
    {/* REPEAT */}
    <div className={styles.plan}>Plano XPTO</div>
    <div className={styles.startDate}>25/03/2018</div>
    <div className={styles.endDate}>25/04/2018</div>
    <div className={styles.amount}>R$ 250,00</div>
    {/* REPEAT */}
    <div className={styles.plan}>Plano XPTO</div>
    <div className={styles.startDate}>25/03/2018</div>
    <div className={styles.endDate}>25/04/2018</div>
    <div className={styles.amount}>R$ 250,00</div>
    {/* REPEAT */}
    <div className={styles.plan}>Plano XPTO</div>
    <div className={styles.startDate}>25/03/2018</div>
    <div className={styles.endDate}>25/04/2018</div>
    <div className={styles.amount}>R$ 250,00</div>
    {/* REPEAT */}
    <div className={styles.plan}>Plano XPTO</div>
    <div className={styles.startDate}>25/03/2018</div>
    <div className={styles.endDate}>25/04/2018</div>
    <div className={styles.amount}>R$ 250,00</div>
  </div>
);

export default SignatureInfos;
