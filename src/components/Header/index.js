// General imports from libs
import React from 'react';

// Import styles
import styles from './styles.css';

// Import assets
import planetLogo from './img/planet_logo.png';

const decidePath = (type, end) => {
  if (type === 'marketplace') {
    return `/marketplace/${end}`;
  }
  return `/ecommerce/${end}`;
};

const Header = props => (
  <header className={styles.header}>
    <div className={styles.header_container}>
      <div className={styles.header_logoArea}>
      <a href={decidePath(props.type, '')}>
        <img src={planetLogo} alt='Logo' className={styles.header_logoImg} />
        </a>
      </div>
      <div className={styles.header_searchBar}>
        <form className={styles.header_searchForm}>
          <input
             type='text'
             placeholder='O que você procura?'
             className={styles.header_searchInput} />
          <a href={decidePath(props.type, '')}>
            <i className={`fas fa-search fa-2x ${styles.header_searchIcon}`}></i>
          </a>
        </form>
      </div>
      <div className={styles.header_accountAndCart}>
        <div className={styles.header_customerAccount}>
          <i className={`far fa-user fa-2x ${styles.header_customerIcon}`}></i>
          <span className={styles.header_customerText}>
            <h3>Olá!</h3>
            <a href={decidePath(props.type, '')}>
              Minha conta
              <i className='fas fa-angle-down'></i>
            </a>
          </span>
        </div>
        <div className={styles.header_shoppingCart}>
          <a href={decidePath(props.type, 'cart')}>
            <i className='fas fa-shopping-cart fa-2x'></i>
          </a>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
