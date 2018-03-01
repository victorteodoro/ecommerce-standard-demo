// General imports from libs
import React from 'react';

// Import components

// Import styles
// import './Footer.css';

// Import assets
import stoneLogo from './img/logo_stone.png';
import mundiLogo from './img/logo_mundi.png';
import pagarmeLogo from './img/logo_pagarme.png';

const Footer = () => (
  <footer className="footer">
    <div className="footerStoneInfo">
      <img src={stoneLogo} alt="Logo Stone" className="footerStoneLogo" />
      <p className="footerStoneRC">meajuda@stone.com.br</p>
      <p className="footerStoneFone">3004-9680</p>
      <p className="footerDocs"><a href="https://docs.stone.com.br">Documentação</a></p>
    </div>
    <div className="footerMundiInfo">
      <img src={mundiLogo} alt="Logo Mundi" className="footerMundiLogo" />
      <p className="footerStoneRC">suporte@mundipagg.com</p>
      <p className="footerStoneFone">3003-0460</p>
      <p className="footerDocs"><a href="https://docs.mundipagg.com">Documentação</a></p>
    </div>
    <div className="footerPagarmeInfo">
      <img src={pagarmeLogo} alt="Logo Pagar.me" className="footerPagarmeLogo" />
      <p className="footerPagarmeRC">relacionamento@pagar.me</p>
      <p className="footerPagarmeFone">4004-1330</p>
      <p className="footerDocs"><a href="https://docs.pagar.me">Documentação</a></p>
    </div>
  </footer>
);
export default Footer;