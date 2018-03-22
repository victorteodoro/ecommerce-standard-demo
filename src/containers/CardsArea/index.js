// General imports from libs
import React from 'react';

// Import styles
import styles from './styles.css';

// Actual rendering of the cards area
const CardsArea = props => (
    <section className={styles.cardArea}>
        {props.children}
    </section>
);

export default CardsArea;
