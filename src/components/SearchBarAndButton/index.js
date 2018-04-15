import React from 'react';
import { Link } from 'react-router-dom';

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
            <Link to={`/`}>
                <i className={`fas fa-search fa-2x ${styles.searchIcon}`}></i>
            </Link>
        </div>
        <Link to={`/signature/adm/new/`} className={styles.hyperLink} >
            <button className={styles.btn}>Novo usuário</button>
        </Link>
    </div>
);
export default SearchBarAndButton;
