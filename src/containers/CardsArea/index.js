// General imports from libs
import React from "react";
import { map } from 'ramda';

// Import styles
import styles from './styles.css';

// Import components
import { FrontCard, BackCard } from '../../components/';

// Function to create cards accordingly to the input file
const populateCards = props => {
    const list = props.inputs
    return list.map(input=> (
        <FrontCard key={input._id} inputs={input} />
        // <BackCard key={input._id} inputs={input} />
    ))

};

//Actual rendering of the cards area
const CardsArea = props => (
    <section className={styles.cardArea}>
        {populateCards(props)}
    </section>
);

export default CardsArea;