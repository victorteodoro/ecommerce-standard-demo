import motorola from '../img/motorola_g5s.png';
import motorolaSmall from '../img/motorola_g5s_small.png';
import dell from '../img/dell_inspiron15.png';
import dellSmall from '../img/dell_inspiron15_small.png';
import lg from '../img/lg_smartTV_55.jpg';
import lgSmall from '../img/lg_smartTV_55_small.jpg';

const inputs = [
  {
    name: 'Smartphone Motorola G5S',
    shortSpecs: 'Dual Chip Android 7.1.1 Nougat Tela 5.5\' Snapdragon 625 32GB 4G 13MP Câmera',
    priceBig: 'R$ 960,00',
    priceInstallments: '8x de R$ 107,50 sem juros',
    largeSpecs: `A combinação ideal entre design e performance, o novo Moto G5S Plus
                    possui estrutura única em metal, trazendo recursos surpreendentes e
                    experiências incríveis.Com câmera traseira Dupla de 13MP, ele
                    registra todos os seus momentos com precisão e nitidez.Já a câmera
                    frontal de 8MP com ângulo aberto faz selfies perfeitas.`,
    img: motorola,
    seller: 'Vendido e entregue por Stone Store',
    imgSmall: motorolaSmall
  },
  {
    name: 'Notebook Dell Inspiron i15-5566-A30P',
    shortSpecs: 'Core i5 4GB 1TB Tela LED 15.6 Windows 10',
    priceBig: 'R$ 2.042,49',
    priceInstallments: '8x de R$ 268,74 s/ juros ',
    largeSpecs: `Com o Inspiron 15 5000, você terá uma nova perspectiva sobre como um
                    Notebook poderá te ajudar. Além de um design moderno e diferenciado,
                    este modelo conta com uma tela de 15 polegadas em Alta Definição
                    (1366 x 768) e a 7ª Geração de Processadores Intel Core i5, Placa de
                    Vídeo Intel® HD Graphics 620.`,
    img: dell,
    seller: 'Vendido e entregue por Stone Store',
    imgSmall: dellSmall
  },
  {
    name: 'LG Smart TV 55',
    shortSpecs: 'SUPER ULTRA HD 55SJ8000 Conversor Digital Wi-Fi integrado 3 USB 4 HDMI',
    priceBig: 'R$ 4.399,99',
    priceInstallments: '10x de R$ 439,99 s/ juros',
    largeSpecs: `Fidelidade às cores. O Nano Cell™ absorve as interferências de luz
                    e melhora a pureza das cores reproduzidas. - Elegância e qualidade.
                    Seu design Ultra Slim, junto com o melhor da resolução 4K trará um
                    toque especial ao seu lar. - Interatividade. Realize várias funções
                    de forma fácil com o controle`,
    img: lg,
    seller: 'Vendido e entregue por Stone Store',
    imgSmall: lgSmall
  }
];

export default inputs;
