// General imports from libs
import React from "react";

// Import assets
import motorolaG5 from './img/motorola_g5s.png';
import motorolaG5Small from './img/motorola_g5s_small.png';
import inspiron15 from './img/dell_inspiron15.png';
import inspiron15Small from './img/dell_inspiron15_small.png';
import smartTV from './img/lg_smartTV_55.jpg';
import smartTVSmall from './img/lg_smartTV_55_small.jpg';

const ProductArea = () => (
  <section className="productArea">
    <div className="productCard">
      <div className="productCardSide productCardSideFront">
        <img src={motorolaG5} alt="Motorola G5S" />
        <div className="productFrontDescription">
          <p className="productName">Smartphone Motorola G5S</p>
          <p className="productShortSpecs">
            Dual Chip Android 7.1.1 Nougat Tela 5.5" Snapdragon 625 32GB 4G 13MP
            Câmera
          </p>
          <p className="productPriceBig">R$ 960,00</p>
          <p className="productPriceInstallments">8x de R$ 107,50 sem juros</p>
        </div>
      </div>
      <div className="productCardSide productCardSideBack">
        <img
          src={motorolaG5Small}
          alt="Motorola G5S"
          className="productImgSmall"
        />
        <div className="productBackDescription">
          <p className="productName">Smartphone Motorola G5S</p>
          <p className="productLongSpecs">
            A combinação ideal entre design e performance, o novo Moto G5S Plus
            possui estrutura única em metal, trazendo recursos surpreendentes e
            experiências incríveis. Com câmera traseira Dupla de 13MP, ele
            registra todos os seus momentos com precisão e nitidez. Já a câmera
            frontal de 8MP com ângulo aberto faz selfies perfeitas.
          </p>
          <p className="productPriceBig">R$ 960,00</p>
          <p className="productPriceInstallments">8x de R$ 107,50 sem juros</p>
          <div className="buyBtns">
            <button className="btn btnWhite">Adicionar ao carrinho</button>
            <button className="btn btnGrey">Compra com 1-click</button>
          </div>
        </div>
      </div>
    </div>
    <div className="productCard">
      <div className="productCardSide productCardSideFront">
        <img src={inspiron15} alt="Dell Insprion 15" />
        <div className="productFrontDescription">
          <p className="productName">Notebook Dell Inspiron i15-5566-A30P</p>
          <p className="productShortSpecs">
            Core i5 4GB 1TB Tela LED 15.6" Windows 10
          </p>
          <p className="productPriceBig">R$ 2.042,49</p>
          <p className="productPriceInstallments">8x de R$ 268,74 s/ juros </p>
        </div>
      </div>
      <div className="productCardSide productCardSideBack">
        <img
          src={inspiron15Small}
          alt="Dell Insprion 15"
          className="productImgSmall"
        />
        <div className="productBackDescription">
          <p className="productName">Notebook Dell Inspiron i15-5566-A30P</p>
          <p className="productLongSpecs">
            Com o Inspiron 15 5000, você terá uma nova perspectiva sobre como um
            Notebook poderá te ajudar. Além de um design moderno e diferenciado,
            este modelo conta com uma tela de 15 polegadas em Alta Definição
            (1366 x 768) e a 7ª Geração de Processadores Intel Core i5, Placa de
            Vídeo Intel® HD Graphics 620.
          </p>
          <p className="productPriceBig">R$ 2.042,49</p>
          <p className="productPriceInstallments">8x de R$ 268,74 s/ juros </p>
          <div className="buyBtns">
            <button className="btn btnWhite">Adicionar ao carrinho</button>
            <button className="btn btnGrey">Compra com 1-click</button>
          </div>
        </div>
      </div>
    </div>
    <div className="productCard">
      <div className="productCardSide productCardSideFront">
        <img src={smartTV} alt="LG Smart TV 55" />
        <div className="productFrontDescription">
          <p className="productName">Smart TV LED LG 55"</p>
          <p className="productShortSpecs">
            SUPER ULTRA HD 55SJ8000 Conversor Digital Wi-Fi integrado 3 USB 4
            HDMI
          </p>
          <p className="productPriceBig">R$ 4.399,99</p>
          <p className="productPriceInstallments">10x de R$ 439,99 s/ juros</p>
        </div>
      </div>
      <div className="productCardSide productCardSideBack">
        <img
          src={smartTVSmall}
          alt="LG Smart TV 55"
          className="productImgSmall"
        />
        <div className="productBackDescription">
          <p className="productName">Smart TV LED LG 55"</p>
          <p className="productLongSpecs">
            - Fidelidade às cores. O Nano Cell™ absorve as interferências de luz
            e melhora a pureza das cores reproduzidas. - Elegância e qualidade.
            Seu design Ultra Slim, junto com o melhor da resolução 4K trará um
            toque especial ao seu lar. - Interatividade. Realize várias funções
            de forma fácil com o controle
          </p>
          <p className="productPriceBig">R$ 4.399,99</p>
          <p className="productPriceInstallments">10x de R$ 439,99 s/ juros</p>
          <div className="buyBtns">
            <button className="btn btnWhite">Adicionar ao carrinho</button>
            <button className="btn btnGrey">Compra com 1-click</button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProductArea;