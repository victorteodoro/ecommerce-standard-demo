// General imports from libs
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import PaymentCard from 'react-payment-card-component';
import { map, addIndex, merge } from 'ramda';

// Imports from internal helper funcs
import handleChangeFromInput from '../../../helpers/updateStateFromInput';
import flipPagarmeCard from '../../../helpers/flipPagarmeCard';
import checkBinInfo from '../../../helpers/checkBinInfo';

import { charge } from '../../../helpers/payments/objects/mundiobjects';
import { MundipaggConnector } from '../../../helpers/payments';
// Import components
import CardForm from '../CardForm/';

// Import styles
import style from './styles.css';

// Import inputs
import inputs from '../../../resources/CheckoutScreen/inputs';

// Import components
// import TabItem from '../../TabItem/';

const mapIndexed = addIndex(map);

const populateTabList = (input, index) => (
  <Tab key={index} className={style.credit}>
    <i className={input.icon}></i>
    {input.type}
  </Tab>
);

class PaymentDetails extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.getValidationState = this.getValidationState.bind(this);
    this.paymentCard = this.paymentCard.bind(this);
    // Setup helper functions
    this.handleChange = handleChangeFromInput(
      this,
      [
        'cardNumber',
        'holderName',
        'expiryMonth',
        'expiryYear',
        'cvv'
      ]
    );
    this.flipCard = flipPagarmeCard(this);
    this.checkBin = checkBinInfo(this);
    this.state = {
      cardNumber: '',
      holderName: '',
      expiryMonth: '',
      expiryYear: '',
      cvv: '',
      flipped: false,
      cardBrand: '',
      cardBank: ''
    };
  }
  /* eslint-disable */
  /* eslint-enable */

  static handleResponse(resp) {
    if (resp.data.payment_method === 'boleto') {
      window.open(resp.data.last_transaction.pdf, '_blank');
    }
    let loc = window.location.href;
    loc = loc.substring(0, loc.lastIndexOf('/'));
    loc = `${loc}/finish`;
    window.location.href = loc;
  }

  paymentCard() {
    const { payment } = charge;
    const { credit_card: creditCard } = payment;
    const { card } = creditCard;
    card.number = this.state.cardNumber;
    card.holder_name = this.state.holderName;
    card.exp_month = this.state.expiryMonth;
    card.exp_year = this.state.expiryYear;
    card.cvv = this.state.cvv;
    const chargeNew = merge(charge, { card });
    MundipaggConnector('POST', 'charges', chargeNew)
      .then(resp => (PaymentDetails.handleResponse(resp)));
  }

  static paymentBoleto() {
    const payment = {
      payment_method: 'boleto',
      boleto: {
        bank: '033',
        instructions: 'Pagar até o vencimento <br> Não aceitar depois',
        due_at: '2018-09-20T00:00:00Z'
      }
    };
    const chargeNew = merge(charge, { payment });
    MundipaggConnector('POST', 'charges', chargeNew)
      .then(resp => (PaymentDetails.handleResponse(resp)));
  }

  getValidationState() {
    if (this.state.cardNumber.length > 15 &&
      this.state.holderName.length > 3 &&
      this.state.expiryMonth.length === 2 &&
      this.state.expiryYear.length === 2 &&
      this.state.cvv.length >= 3) {
      return 'success';
    }
    return null;
  }

  render() {
    return (
      <Tabs className={style.paymentDetailsTabs}>
        <TabList className={style.paymentMethodTabList}>
          {
            mapIndexed(populateTabList, inputs)
          }
        </TabList>

        <TabPanel className={style.credictCardForm}>
          <div className={style.paymentCard}>
            &nbsp;
            <PaymentCard
               bank={this.state.cardBrand || 'default'}
               model='normal'
               type='black'
               brand={this.state.cardBrand}
               number={this.state.cardNumber}
               cvv={this.state.cvv}
               holderName={this.state.holderName}
               expiration={`${this.state.expiryMonth}/${this.state.expiryYear}`}
               flipped={this.state.flipped}
               />

            <br />

            <CardForm
               validationState={this.getValidationState}
               cardNumber={this.state.cardNumber}
               holderName={this.state.holderName}
               expiryMonth={this.state.expiryMonth}
               expiryYear={this.state.expiryYear}
               cvv={this.state.cvv}
               changeHandler={this.handleChange}
               flipCard={this.flipCard}
               checkBin={this.checkBin}
               />
          </div>
          <button onClick={this.paymentCard} className={`${style.btn} ${style.btnWhite}`}>
              Finalizar com Pagamento
          </button>
        </TabPanel>
        <TabPanel className={style.boletoForm}>
          <div className={style.paymentBoleto}>
            Pague no boleto com <b> 10% de desconto.</b>
            <br />
            <div className={style.boletoPayOptions}>
            Imprima o boleto e pague no banco
            <br />
            ou
            <br />
            pague pela internet utilizando o código de barras do boleto.
            <br />
            O prazo de validade do boleto é de 1 dia útil.
            </div>
            <br />
            <br />
            <div className={style.boletoButton}>
              <button onClick={PaymentDetails.paymentBoleto} className={`${style.btn} ${style.btnWhite}`}>
                Finalizar com Pagamento
              </button>
            </div>
            <div className={style.notices}>
              <div className={style.noticeTitle}>Importante</div>
              <ul className={style.list}>
                <li>Caso o seu computador tenha um programa anti pop-up,
                  será preciso desativá-lo antes de finalizar sua compra e imprimir o
                  boleto ou pagar pelo internet banking;</li>
                <li>Não faça depósito ou transferência entre contas.
                  O boleto não é enviado pelos Correios.
                  Imprima-o e pague-o no banco ou pela internet;</li>
                <li>Se o boleto não for pago até a data de vencimento,
                  o pedido será automaticamente cancelado;</li>
                <li>O prazo de entrega dos pedidos pagos com boleto bancário começa
                  a contar três dias depois do pagamento do boleto,
                  tempo necessário para que a instituição bancária confirme o pagamento.</li>
              </ul>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    );
  }
}

export default PaymentDetails;
