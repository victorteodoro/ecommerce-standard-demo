import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import PaymentCard from 'react-payment-card-component';
import lookupFunction from 'binlookup';

import {
  cond,
  equals,
  compose,
  path,
  curry,
  applySpec,
  prop,
  toLower,
  defaultTo,
  split
} from 'ramda';

// Import components
import CardForm from '../CardForm/';

// Import styles
import style from './styles.css';

const lookup = lookupFunction();

class PaymentDetails extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
    this.getValidationState = this.getValidationState.bind(this);
    this.updateState = this.updateState.bind(this);
    this.checkBin = this.checkBin.bind(this);
    this.updateStateFromBin = this.updateStateFromBin.bind(this);

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
    const length = this.state.cardNumber.length;
    return length > 15 ? 'success' : null;
  }

  checkInputType = (desiredType) => {    
    return compose(
      equals(desiredType),
      path(['target', 'name'])
    );
  };

  updateState = curry((desiredProperty, event) => {    
    this.setState({
      [desiredProperty]: event.target.value
    });
  });

  handleChange = cond([
    [this.checkInputType('cardNumber'), this.updateState('cardNumber')],
    [this.checkInputType('holderName'), this.updateState('holderName')],
    [this.checkInputType('expiryMonth'), this.updateState('expiryMonth')],
    [this.checkInputType('expiryYear'), this.updateState('expiryYear')],
    [this.checkInputType('cvv'), this.updateState('cvv')]
  ]);

  flipCard = () => {
    this.setState({
      flipped: !this.state.flipped
    });
  }

  checkBin = ({target: { value }}) => {
    if(value.length > 5)
      lookup(value)
      .then(data => console.log(data) && data)
      .then(this.updateStateFromBin);
  }

  updateStateFromBin = compose(
    (binData) =>  this.setState(binData),
    applySpec({
      cardBrand: compose(
        toLower,
        defaultTo(''),
        prop('scheme')
      ),
      cardBank: compose(
        toLower,
        (splittedName) => splittedName[0],
        split(' '),
        defaultTo(''),
        path(['bank', 'name'])
      )
    })
  );
  
  render() {    
    return(
      <Tabs className={style.paymentDetailsTabs}>
        <TabList className={style.paymentMethodTabList}>
          <Tab className={style.credit}>
            <i className="far fa-credit-card fa-3x"></i>
            Crédito
          </Tab>
          <Tab className={style.boleto}>
            <i className="fa fa-barcode fa-3x"></i>
            Boleto
          </Tab>
          <Tab className={style.debit}>
            <i className="fas fa-credit-card fa-3x"></i>
            Débito
          </Tab>
        </TabList>

        <TabPanel className={style.credictCardForm}>
          <div className={style.paymentCard}>
            &nbsp;
            <PaymentCard
               bank={this.state.cardBrand || "santander"}
               model="normal"
               type="black"
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
