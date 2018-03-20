// General imports from libs
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import PaymentCard from 'react-payment-card-component';
import { map, addIndex } from 'ramda';

// Imports from internal helper funcs
import handleChangeFromInput from '../../../helpers/updateStateFromInput';
import flipPagarmeCard from '../../../helpers/flipPagarmeCard';
import checkBinInfo from '../../../helpers/checkBinInfo';

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

  getValidationState() {
    const { length } = this.state.cardNumber;
    return length > 15 ? 'success' : null;
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
               bank={this.state.cardBrand || 'santander'}
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
        </TabPanel>
        <TabPanel className={style.boletoForm}>
          <div>Formulário do boleto</div>
        </TabPanel>
        <TabPanel className={style.debitCardForm}>
          <div>Formulário do cartão de débito</div>
        </TabPanel>
      </Tabs>
    );
  }
}

export default PaymentDetails;
