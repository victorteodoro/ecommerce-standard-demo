// General imports from libs
import React from 'react';

// Import styles
import styles from './styles.css';

// Import assets
import motorolaG5S from './img/motorola_g5s.png';
import inspiron15 from './img/dell_inspiron15.png';
import smartTV from './img/lg_smartTV_55.jpg';


const CartProducts = () => (
  <section styles={styles.cartProducts}>
    <div styles={styles.cartProductsHeader}>
      <p styles={styles.productNameLabel}>Produto(s)</p>
      <p styles={styles.productQuantityLabel}>Quantidade</p>
      <p styles={styles.unitaryCostLabel}>Valor unitário</p>
      <p styles={styles.aggregateCostLabel}>Valor total</p>
    </div>
    <div styles={styles.cartProductsProduct}>
      <div styles={styles.productInfo}>
        <div styles={styles.productImg}>
          <img src={motorolaG5S} alt="Dell Inspiron 15" />
        </div>
        <div styles={styles.productDescription}>
          <h3 styles={styles.productDescriptionShort}>Smartphone Motorola G5S</h3>
          <p styles={styles.productDescriptionLong}>Dual Chip Android 7.1.1 Nougat Tela 5.5" Snapdragon 625 32GB 4G 13MP Câmera</p>
        </div>
      </div>
      <div styles={styles.productQuantity}>
        <select name="quantity" id="quantitySelector">
          <option value="1" selected>1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div styles={styles.productUnitaryCost}>R$ 960,00</div>
      <div styles={styles.productAggregateCost}>R$ 960,00</div>
    </div>
    <div styles={styles.cartProductsProduct}>
      <div styles={styles.productInfo}>
        <div styles={styles.productImg}>
          <img src={inspiron15} alt="Dell Inspiron 15" />
        </div>
        <div styles={styles.productDescription}>
          <h3 styles={styles.productDescriptionShort}>Notebook Dell Inspiron i15-5566-A30P</h3>
          <p styles={styles.productDescriptionLong}>Core i5 4GB 1TB Tela LED 15.6" Windows 10</p>
        </div>
      </div>
      <div styles={styles.productQuantity}>
        <select name="quantity" id="quantitySelector">
          <option value="1" selected>1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div styles={styles.productUnitaryCost}>R$ 2.042,49</div>
      <div styles={styles.productAggregateCost}>R$ 2.042,49</div>
    </div>
    <div styles={styles.cartProductsProduct}>
      <div styles={styles.productInfo}>
        <div styles={styles.productImg}>
          <img src={smartTV} alt="Dell Inspiron 15" />
        </div>
        <div styles={styles.productDescription}>
          <h3 styles={styles.productDescriptionShort}>Smart TV LED LG 55"</h3>
          <p styles={styles.productDescriptionLong}>SUPER ULTRA HD 55SJ8000 Conversor Digital Wi-Fi integrado 3 USB 4 HDMI</p>
        </div>
      </div>
      <div styles={styles.productQuantity}>
        <select name="quantity" id="quantitySelector">
          <option value="1" selected>1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div styles={styles.productUnitaryCost}>R$ 4.399,99</div>
      <div styles={styles.productAggregateCost}>R$ 4.399,99</div>
    </div>
  </section>
);

export default CartProducts;
