// General imports from libs
import React from 'react';

// Import styles
import styles from './styles.css';

// Import assets
import motorolaG5S from './img/motorola_g5s.png';

const CartProducts = () => (
  <section className={styles.cartProducts}>
    <div className={styles.cartProductsHeader}>
      <p className={styles.productNameLabel}>Produto(s)</p>
      <p className={styles.productQuantityLabel}>Quantidade</p>
      <p className={styles.unitaryCostLabel}>Valor unitário</p>
      <p className={styles.aggregateCostLabel}>Valor total</p>
    </div>
    <div className={styles.cartProductsProduct}>
      <div className={styles.productInfo}>
        <div className={styles.productImg}>
          <img src={motorolaG5S} alt='Motorola G5S' />
        </div>
        <div className={styles.productDescription}>
          <h3 className={styles.productDescriptionShort}>Smartphone Motorola G5S</h3>
          <p
             className={styles.productDescriptionLong}
             >
            Dual Chip Android 7.1.1 Nougat Tela 5.5' Snapdragon 625 32GB 4G 13MP Câmera
          </p>
        </div>
      </div>
      <div className={styles.productQuantity}>
        1
      </div>
      <div className={styles.productUnitaryCost}>R$ 960,00</div>
      <div className={styles.productAggregateCost}>R$ 960,00</div>
    </div>
  </section>
);

export default CartProducts;
