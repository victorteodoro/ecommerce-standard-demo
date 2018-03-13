// General imports from libs
import React from 'react';

// Import styles
import styles from './styles.css';

// Import assets
import stoneLogo from './img/logo_stone.png';
import mundiLogo from './img/logo_mundi.png';
import pagarmeLogo from './img/logo_pagarme.png';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerStoneInfo}>
      <img src={stoneLogo} alt="Logo Stone" className={styles.footerStoneLogo} />
      <p className={styles.footerStoneRC}>meajuda@stone.com.br</p>
      <p className={styles.footerStoneFone}>3004-9680</p>
      <p className={styles.footerDocs}><a href="https://docs.stone.com.br">Documentação</a></p>
    </div>
    <div className={styles.footerMundiInfo}>
      <img src={mundiLogo} alt="Logo Mundi" className={styles.footerMundiLogo} />
      <p className={styles.footerStoneRC}>suporte@mundipagg.com</p>
      <p className={styles.footerStoneFone}>3003-0460</p>
      <p className={styles.footerDocs}><a href="https://docs.mundipagg.com">Documentação</a></p>
    </div>
    <div className={styles.footerPagarmeInfo}>
      <img src={pagarmeLogo} alt="Logo Pagar.me" className={styles.footerPagarmeLogo} />
      <p className={styles.footerPagarmeRC}>relacionamento@pagar.me</p>
      <p className={styles.footerPagarmeFone}>4004-1330</p>
      <p className={styles.footerDocs}><a href="https://docs.pagar.me">Documentação</a></p>
    </div>
  </footer>
);
export default Footer;
