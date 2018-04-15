// General imports from libs
import React from 'react';
import { Link } from 'react-router-dom';

// Import styles
import styles from './styles.css';

const selectType = (type) => {
  if (type === 'mkt') {
    return '/marketplace/cart';
  }
  return '/ecommerce/cart';
};

const RotatingCard = props => (
    <div className={styles.simpleCard}>
        <div className={styles.simpleCardFront}>
            <img src={props.inputs.img} alt={props.inputs.name} />
            <div className={styles.simpleCardFrontDescription}>
                <p className={styles.name}>{props.inputs.name}</p>
                <p className={styles.shortSpecs}>
                    {props.inputs.shortSpecs}
                </p>
                <div className={styles.seller}>{props.inputs.seller}</div>
                <p className={styles.priceBig}>{props.inputs.priceBig}</p>
                <p className={styles.priceInstallments}>{props.inputs.priceInstallments}</p>
            </div>
        </div>
        <div className={styles.simpleCardBack}>
            <img
                src={props.inputs.imgSmall}
                alt={props.inputs.name}
                className={styles.imgSmall}
            />
            <div className={styles.simpleCardBackDescription}>
                <p className={styles.backName}>{props.inputs.name}</p>
                <p className={styles.longSpecs}>{props.inputs.largeSpecs}
                </p>
                <p className={styles.backPriceBig}>{props.inputs.priceBig}</p>
                <p className={styles.backPriceInstallments}>{props.inputs.priceInstallments}</p>
                <div className={styles.buyBtns}>
                    <Link to={selectType(props.inputs.type)}>
                        <button className={`${styles.btn} ${styles.btnWhite}`}>
                            Adicionar ao carrinho
                            </button>
                    </Link>
                    <button className={`${styles.btn} ${styles.btnGrey}`} disabled>Compra com 1-click</button>
                </div>
            </div>
        </div>
    </div>
);

export default RotatingCard;
