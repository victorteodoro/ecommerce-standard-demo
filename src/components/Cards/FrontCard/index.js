// General imports from libs
import React from 'react';

// Import styles
import styles from './styles.css';

const FrontCard = props => (
    <div className={styles.simpleCard}>
    {console.log('props frontcard ->', props)}
        <div className={styles.simpleCardFront}>
            <img src={props.inputs.img} alt={props.inputs.name} />
            <div className={styles.simpleCardFrontDescription}>
                <p className={styles.name}>{props.inputs.name}</p>
                <p className={styles.shortSpecs}>
                    {props.inputs.shortSpecs}
                </p>
                <p className={styles.priceBig}>{props.inputs.priceBig}</p>
                <p className={styles.priceInstallments}>{props.inputs.priceInstallments}</p>
            </div>
        </div>
    </div>
);

export default FrontCard;
