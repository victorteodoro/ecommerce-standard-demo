// General imports from libs
import React from "react";

// Import styles
import styles from './styles.css';

// Import assets
import motorolaG5 from './img/motorola_g5s.png';

const FrontCard = () => (
    <div className={styles.simpleCard}>
        <div className={styles.simpleCardFront}>
            <img src={motorolaG5} alt="Motorola G5S" />
            <div className={styles.simpleCardFrontDescription}>
                <p className={styles.name}>Smartphone Motorola G5 Sapiens</p>
                <p className={styles.shortSpecs}>
                    Dual Chip Android 7.1.1 Nougat Tela 5.5" Snapdragon 625 32GB 4G 13MP
                    Câmera
          </p>
                <p className={styles.priceBig}>R$ 960,00</p>
                <p className={styles.priceInstallments}>8x de R$ 107,50 sem juros</p>
            </div>
        </div>
    </div>
);

export default FrontCard;