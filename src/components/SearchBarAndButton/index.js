import React from 'react';

// Importing styles
import styles from './styles.css';

const SearchBarAndButton = () => (
    <div className={styles.searchAndButton}>
        <form className={styles.searchForm}>
            <input
                type='text'
                placeholder=' Digite o Nome ou o ID do cliente que deseja encontrar'
                className={styles.searchInput} />
        </form>
        <div className={styles.searchIconDiv}>
            <a href='/'>
                <i className={`fas fa-search fa-2x ${styles.searchIcon}`}></i>
            </a>
        </div>
        <a href='/signature/adm/new/' className={styles.hyperLink} >
            <button className={styles.btn}>Novo usuário</button>
        </a>
    </div>
);
export default SearchBarAndButton;
