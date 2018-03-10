// General imports from libs
import React from 'react';


const PurchaseSummary = () => (
  <div className="purchaseSummaryCheckout">
    <div className="purchaseSummaryTitle">Dados da compra</div>
    <div className="totalAmountLabel">Valor da compra</div>
    <div className="totalAmountValue">R$ 960,00</div>
    <div className="shippingCostLabel">Frete</div>
    <div className="shippingCostValue">Grátis</div>
    <span className="dividingLine"></span>
    <div className="totalWithShippingLabel">Total a pagar</div>
    <div className="totalWithShippingValue">R$ 960,00</div>
    <div className="discountedPriceLabel">No boleto</div>
    <div className="discountedPriceValue">R$ 864,00</div>
  </div>
);

export default PurchaseSummary;
