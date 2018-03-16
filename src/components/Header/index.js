// General imports from libs
import React from 'react';

// Import styles
import styles from './styles.css';

// Import assets
import planetLogo from './img/planet_logo.png';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.header_container}>
      <div className={styles.header_logoArea}>
        <img src={planetLogo} alt='Logo' className={styles.header_logoImg} />
      </div>
      <div className={styles.header_searchBar}>
        <form className={styles.header_searchForm}>
          <input
             type='text'
             placeholder='O que você procura?'
             className={styles.header_searchInput} />
          <a href='/'>
            <i className={`fas fa-search fa-2x ${styles.header_searchIcon}`}></i>
          </a>
        </form>
      </div>
      <div className={styles.header_accountAndCart}>
        <div className={styles.header_customerAccount}>
          <i className={`far fa-user fa-2x ${styles.header_customerIcon}`}></i>
          <span className={styles.header_customerText}>
            <h3>Olá!</h3>
            <a href='/'>
              Minha conta
              <i className='fas fa-angle-down'></i>
            </a>
          </span>
        </div>
        <div className={styles.header_shoppingCart}>
          <a href='/'>
            <i className='fas fa-shopping-cart fa-2x'></i>
          </a>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
