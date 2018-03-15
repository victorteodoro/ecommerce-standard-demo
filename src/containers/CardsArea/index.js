// General imports from libs
import React from "react";

// Import styles
import styles from './styles.css';

// Import components
import { FrontCard } from '../../components/';

// Para tornar a card area mais dinamica, implementar funcoes abaixo

// import { map } from 'ramda';
// const buildCards = (card) => (
//   <Card name={card.name} description={card.description} />
// );

/* {map(buildCards, planList)}
aaa
*/

const CardsArea = () => (
    // const PlansArea = ({ planList }) => (
    <section className={styles.cardArea}>
        <FrontCard />
        <FrontCard />
        <FrontCard />
    </section>
);

export default CardsArea;
