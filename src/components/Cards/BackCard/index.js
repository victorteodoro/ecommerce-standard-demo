// General imports from libs
import React from "react";
import { Link } from 'react-router-dom';

// Import styles
import styles from './styles.css';

const BackCard = props => (
    <div className={styles.simpleCard}>
            <div className={styles.simpleCardBack}>
                <img
                    src={props.inputs.img}
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
                        <Link to="/ecommerce/cart">
                            <button className={styles.btn + ' ' + styles.btnWhite}>
                                Adicionar ao carrinho
                            </button>
                        </Link>
                        <button className={styles.btn + ' ' + styles.btnGrey}>Compra com 1-click</button>
                    </div>
                </div>
            </div>
    </div>
);

export default BackCard;
