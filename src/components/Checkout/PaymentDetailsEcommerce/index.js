// General imports from libs
/* eslint-disable */
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import PaymentCard from 'react-payment-card-component';
import { map, addIndex, merge } from 'ramda';
import { Link, Redirect } from 'react-router-dom';

// Imports from internal helper funcs
import handleChangeFromInput from '../../../helpers/updateStateFromInput';
import flipPagarmeCard from '../../../helpers/flipPagarmeCard';
import checkBinInfo from '../../../helpers/checkBinInfo';
import { charge, orderCheckout, safetyPay } from '../../../helpers/payments/objects/mundiObjects';
import { MundipaggConnector, MundipaggBoletoConnector } from '../../../helpers/payments';

// Import components
import CardForm from '../CardForm/';
import LinkForm from '../LinkForm/';

// Import styles
import style from './styles.css';

// Import inputs
import paymentMethodsEcommerce from '../../../resources/CheckoutScreen/paymentMethods/paymentMethodsEcommerce';

const mapIndexed = addIndex(map);

const populateTabList = (paymentMethods, index) => (
  <Tab key={index} className={style.credit}>
    <i className={paymentMethods.icon}></i>
    {paymentMethods.type}
  </Tab>
);

class PaymentDetailsEcommerce extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.getValidationState = this.getValidationState.bind(this);
    this.getValidationStateLink = this.getValidationStateLink.bind(this);
    this.paymentCardMundi = this.paymentCardMundi.bind(this);
    this.paymentSafetyPay = this.paymentSafetyPay.bind(this);
    this.paymentLink = this.paymentLink.bind(this);
    // Setup helper functions
    this.handleChange = handleChangeFromInput(
      this,
      [
        'cardNumber',
        'holderName',
        'expiryMonth',
        'expiryYear',
        'cvv',
        'installments'
      ]
    );
    this.handleChangeLink = handleChangeFromInput(
      this,
      [
        'email',
        'telephone',
        'nameReceive'
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
      cardBank: '',
      installments: '1',
      email: '',
      telephone: '',
      nameReceive: ''
    };
  }
  
  

  static handleResponseMundi(resp) {
    console.log(JSON.stringify(resp, null, 4));
    if (resp.data.payment_method === 'boleto') {
      window.open(resp.data.last_transaction.pdf, '_blank');
    }
    let loc = window.location.href;
    loc = loc.substring(0, loc.lastIndexOf('/'));
    loc = `${loc}/finish`;
    <Redirect to='/finish' />;
    // window.location.href = loc;
  }
  /* eslint-enable */
  paymentCardMundi() {
    const { payment } = charge;
    const { credit_card: creditCard } = payment;
    creditCard.installments = this.state.installments;
    const { card } = creditCard;
    card.number = this.state.cardNumber;
    card.holder_name = this.state.holderName;
    card.exp_month = this.state.expiryMonth;
    card.exp_year = this.state.expiryYear;
    card.cvv = this.state.cvv;
    let chargeNew = merge(charge, { card });
    chargeNew = merge(charge, { creditCard });
    console.log(JSON.stringify(chargeNew));
    MundipaggConnector('POST', 'charges', chargeNew)
      .then(resp => (PaymentDetailsEcommerce.handleResponseMundi(resp)))
      .catch(err => (console.log(err)));
  }

  paymentSafetyPay() {
    const { customer } = safetyPay;
    customer.name = this.state.nameReceive;
    customer.email = this.state.email;
    const orderCheckoutNew = merge(safetyPay, { customer });
    MundipaggConnector('POST', 'charges', orderCheckoutNew)
      .then(resp => (PaymentDetailsEcommerce.handleResponseMundi(resp)))
      .catch(err => (console.log(err)));
  }

  paymentLink() {
    const { customer } = orderCheckout;
    customer.name = this.state.nameReceive;
    customer.email = this.state.email;
    const { phones } = customer;
    const { mobile_phone: mobilePhone } = phones;
    mobilePhone.area_code = this.state.telephone.substring(0, this.state.telephone.indexOf(' '));
    mobilePhone.number = this.state.telephone.substring(this.state.telephone.indexOf(' ') + 1, this.state.telephone.length);
    let orderCheckoutNew = merge(orderCheckout, { customer });
    orderCheckoutNew = merge(orderCheckoutNew, { mobilePhone });
    console.log(JSON.stringify(orderCheckoutNew, null, 4));
    MundipaggConnector('POST', 'orders', orderCheckoutNew)
      .then(resp => (PaymentDetailsEcommerce.handleResponseMundi(resp)))
      .catch(err => (console.log(err)));
  }

  static paymentBoletoMundi() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const payment = {
      payment_method: 'boleto',
      boleto: {
        bank: '033',
        instructions: 'Pagar até o vencimento <br> Não aceitar depois',
        due_at: tomorrow
      }
    };
    let chargeNew = merge(charge, { payment });
    chargeNew = merge(chargeNew, { amount: 86400 });
    MundipaggBoletoConnector('POST', 'charges', chargeNew)
      .then(resp => (PaymentDetailsEcommerce.handleResponseMundi(resp)))
      .catch(err => (console.log(err)));
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

  static validateEmail(email) {
    const patternEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return patternEmail.test(String(email).toLowerCase());
  }

  getValidationStateLink() {
    if (this.state.nameReceive.length > 3 &&
        this.state.telephone.length === 12 && this.state.telephone.indexOf(' ') > -1 &&
        PaymentDetailsEcommerce.validateEmail(this.state.email)) {
      return 'success';
    }
    return null;
  }

  render() {
    return (
      <Tabs className={style.paymentDetailsTabs}>
        <TabList className={style.paymentMethodTabList}>
          {
            mapIndexed(populateTabList, paymentMethodsEcommerce)
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
               installments={this.state.installments}
               cvv={this.state.cvv}
               changeHandler={this.handleChange}
               flipCard={this.flipCard}
               checkBin={this.checkBin}
               />
            <div className={style.creditButton}>
              <button onClick={this.paymentCardMundi} className={`${style.btn}`}>
                  Finalizar com Pagamento
              </button>
            </div>
          </div>
        </TabPanel>
        <TabPanel className={style.boletoForm}>
          <div className={style.paymentBoleto}>
            Pague no boleto com 10% de desconto.
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
              <button onClick={PaymentDetailsEcommerce.paymentBoletoMundi} className={`${style.btn} ${style.btnWhite}`}>
                Gerar Boleto para Pagamento
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
        <TabPanel className={style.linkForm}>
          <div className={style.paymentLink}>
          Envie um link para pagamento da compra no cartão de crédito ou boleto.<br />
          Preencha os campos abaixo para envio por SMS e Email:
          <br />
          <br />
          <div className={style.form}>
            <LinkForm
               validationState={this.getValidationStateLink}
               nameReceive={this.state.nameReceive}
               telephone={this.state.telephone}
               email={this.state.email}
               changeHandler={this.handleChangeLink}
               />
            </div>
            <br />
            <div className={style.linkButton}>
              <button onClick={this.paymentLink} className={`${style.btn} ${style.btnWhite}`}>
                Enviar Link de Pagamento
              </button>
            </div>
            <div vv>
              <div className={style.noticeTitle}>Importante</div>
              <ul className={style.list}>
                <li>Caso o link não seja pago em até 24 horas, a compra será
                  automaticamente cancelada;</li>
                <li>O pedido no link somente poderá ser pago uma única vez;</li>
                <li>A segurança do link é fornecida por Mundipagg, e todos os dados são
                  transitados com criptografia e recebidos por um ambiente PCI Compliance;</li>
              </ul>
            </div>
          </div>
        </TabPanel>
        <TabPanel className={style.safetyPayForm}>
          <div className={style.paymentSafetyPay}>
          Em breve: disponibilização do SafetyPay neste ecommerce.
          </div>
        </TabPanel>
        <TabPanel className={style.applePay}>
          <div className={style.paymentApple}>
          Apple Pay: Em breve!
          </div>
        </TabPanel>
      </Tabs>
    );
  }
}

export default PaymentDetailsEcommerce;
