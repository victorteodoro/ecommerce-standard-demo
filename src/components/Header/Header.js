// General imports from libs
import React from 'react';

// Import components

// Import styles
// import './Header.css';

// Import assets
import planetLogo from './img/planet_logo.png';

const Header = () => (
  <header className="header">
    <div className="header_container">  
      <div className="header_logoArea">
        <img src={planetLogo} alt="Logo" className="header_logoImg" />
      </div>
      <div className="header_searchBar">
        <form className="header_searchForm">
          <input type="text" placeholder="O que você procura?" className="header_searchInput"/>
          <a href="/">
            <i className="fas fa-search fa-2x header_searchIcon"></i>
          </a>
        </form>
      </div>
      <div className="header_accountAndCart">
        <div className="header_customerAccount">
          <i className="far fa-user fa-2x header_customerIcon"></i>
          <span className="header_customerText">
            <h3>Olá!</h3>
            <a href="/">
              Minha conta
              <i className="fas fa-angle-down"></i>
            </a>
          </span>
        </div>
        <div className="header_shoppingCart">
          <a href="/">
            <i className="fas fa-shopping-cart fa-2x"></i>
          </a>
        </div>
      </div>
    </div>
  </header>
);

export default Header;