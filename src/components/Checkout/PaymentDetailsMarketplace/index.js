// General imports from libs
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import PaymentCard from 'react-payment-card-component';
import { map, addIndex } from 'ramda';
import { Redirect } from 'react-router-dom';

// Imports from internal helper funcs
import handleChangeFromInput from '../../../helpers/updateStateFromInput';
import flipPagarmeCard from '../../../helpers/flipPagarmeCard';
import checkBinInfo from '../../../helpers/checkBinInfo';
import { PagarmeConnector } from '../../../helpers/payments';
import transactionSplit from '../../../helpers/payments/objects/pagarmeObjects';

// Import components
import CardForm from '../CardForm/';

// Import styles
import style from './styles.css';

// Import inputs
import paymentMethodsMarketplace from '../../../resources/CheckoutScreen/paymentMethods/paymentMethodsMarketplace';

const mapIndexed = addIndex(map);

const populateTabList = (paymentMethods, index) => (
  <Tab key={index} className={style.credit}>
    <i className={paymentMethods.icon}></i>
    {paymentMethods.type}
  </Tab>
);

class PaymentDetailsMarketplace extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.getValidationState = this.getValidationState.bind(this);
    this.paymentCardPagarme = this.paymentCardPagarme.bind(this);
    this.paymentBoletoPagarme = this.paymentBoletoPagarme.bind(this);
    this.handleResponsePagarme = this.handleResponsePagarme.bind(this);
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
    this.flipCard = flipPagarmeCard(this);
    this.checkBin = checkBinInfo(this);
    this.state = {
      cardNumber: '',
      holderName: '',
      expiryMonth: '',
      expiryYear: '',
      cvv: '',
      installments: '1',
      flipped: false,
      cardBrand: '',
      cardBank: '',
      toFinish: false
    };
  }
  /* eslint-disable */
  /* eslint-enable */


  handleResponsePagarme(resp) {
    if (resp.data.status === 'paid' || resp.data.status === 'waiting_payment') {
      this.setState({ toFinish: true });
    } else {
      console.log(resp.data);
    }
  }

  paymentCardPagarme() {
    const transaction = transactionSplit;
    transaction.card_number = this.state.cardNumber;
    transaction.card_holder_name = this.state.holderName;
    transaction.card_expiration_date = `${this.state.expiryMonth}${this.state.expiryYear}`;
    transaction.card_cvv = this.state.cvv;
    transaction.installments = this.state.installments;
    PagarmeConnector('POST', 'transactions', transaction)
      .then(resp => (this.handleResponsePagarme(resp)))
      .catch(err => (console.log(err)));
  }

  paymentBoletoPagarme() {
    const transaction = transactionSplit;
    const date = new Date();
    transaction.amount = 86400;
    transaction.boleto_expiration_date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() + 1}`;
    transaction.payment_method = 'boleto';
    transaction.boleto_instructions = 'Pagar boleto para teste de transação Walmart';
    PagarmeConnector('POST', 'transactions', transaction)
      .then(resp => (this.handleResponsePagarme(resp)))
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

  render() {
    if (this.state.toFinish === true) {
      return <Redirect to='/marketplace/finish' />;
    }

    return (
      <Tabs className={style.paymentDetailsTabs}>
        <TabList className={style.paymentMethodTabList}>
          {
            mapIndexed(populateTabList, paymentMethodsMarketplace)
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
               installments={this.state.installments}
               changeHandler={this.handleChange}
               flipCard={this.flipCard}
               checkBin={this.checkBin}
               />
            <div className={style.creditButton}>
              <button onClick={this.paymentCardPagarme} className={`${style.btn}`}>
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
              <button onClick={this.paymentBoletoPagarme} className={`${style.btn} ${style.btnWhite}`}>
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
      </Tabs>
    );
  }
}

export default PaymentDetailsMarketplace;
