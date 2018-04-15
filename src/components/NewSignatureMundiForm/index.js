// General imports from libs
import React from 'react';
import ReactDOM from 'react-dom';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Form
} from 'react-bootstrap';

import PaymentCard from 'react-payment-card-component';
import { merge } from 'ramda';

import handleChangeFromInput from '../../helpers/updateStateFromInput';
import flipPagarmeCard from '../../helpers/flipPagarmeCard';
import checkBinInfo from '../../helpers/checkBinInfo';

import { newSubscription } from '../../helpers/payments/objects/mundiObjects';
import { MundipaggConnector } from '../../helpers/payments';

// Import card component
import CardForm from '../Checkout/CardForm';

// Import styles
import styles from './styles.css';

class NewSignatureMundiForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.getValidationState = this.getValidationState.bind(this);
    this.fillJSON = this.fillJSON.bind(this);
    // Setup helper functions
    this.handleChange = handleChangeFromInput(
      this,
      [
        'cardNumber',
        'holderName',
        'expiryMonth',
        'expiryYear',
        'cvv',
        'planId'
      ]
    );
    this.flipCard = flipPagarmeCard(this);
    this.checkBin = checkBinInfo(this);
    this.state = {
      planId: '',
      paymentMethod: '',
      customer: {
        name: '',
        document: '',
        email: '',
        gender: '',
        birthDate: ''
      },
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


  static handleResponse(resp) {
    if (resp.data.payment_method === 'boleto') {
      window.open(resp.data.last_transaction.pdf, '_blank');
    }
    let loc = window.location.href;
    loc = loc.substring(0, loc.lastIndexOf('/'));
    loc = `/signature/adm/clients`;
    window.location.href = loc;
  }

  fillJSON() {
    this.setState({
      customer: {
        name: ReactDOM.findDOMNode(this.refs.name).value,
        document: ReactDOM.findDOMNode(this.refs.customerDoc).value,
        email: ReactDOM.findDOMNode(this.refs.customerEmail).value,
        gender: ReactDOM.findDOMNode(this.refs.customerGender).value,
        birthDate: ReactDOM.findDOMNode(this.refs.customerBirthDate).value
      },
      planId: ReactDOM.findDOMNode(this.refs.customerPlan).value
    }, () => {
      const { customer } = newSubscription;
      const { card } = newSubscription;
      newSubscription.plan_id = this.state.planId;
      customer.name = this.state.customer.name;
      customer.document = this.state.customer.document;
      customer.email = this.state.customer.email;
      customer.gender = this.state.customer.gender;
      customer.birthDate = this.state.customer.birthDate;
      card.number = this.state.cardNumber;
      card.holder_name = this.state.holderName;
      card.exp_month = this.state.expiryMonth;
      card.exp_year = this.state.expiryYear;
      card.cvv = this.state.cvv;
      const newSubscriptionCardMerged = merge(newSubscription, { card });
      const newSubscriptionCustomerMerged = merge(newSubscriptionCardMerged, { customer });
      MundipaggConnector('POST', 'subscriptions', newSubscriptionCustomerMerged)
        .then(resp => (NewSignatureMundiForm.handleResponse(resp)));
    });
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
      <div className={styles.signatureForm}>
      <div className={styles.containerTitle}>
        <div className={styles.rowTitle}>
          <h3>Formulário para criação de um novo cliente</h3>
        </div>
        <div className={styles.rowBtn} >
            <button className={styles.btn} onClick={this.fillJSON} > Confirmar </button>
        </div>
      </div>
        <div className={styles.leftDiv}>
          <Form>
            <div className={styles.row} >
              <FormGroup>
                <ControlLabel className={styles.label}>Nome</ControlLabel>
                <FormControl
                  ref='name'
                  type='text'
                  name='customerName'
                  placeholder='Nome do cliente'
                  className={styles.largeInput}
                  onChange={this.changeHandler}
                />
              </FormGroup>
            </div>
            <div className={styles.row} >
              {/* Novo campo */}
              <FormGroup>
                <ControlLabel className={styles.label}>Documento</ControlLabel>
                <FormControl
                  type='text'
                  ref='customerDoc'
                  name='customerDoc'
                  placeholder='CPF'
                  className={styles.largeInput}
                />
              </FormGroup>
            </div>
            <div className={styles.row} >
              {/* Novo campo */}
              <FormGroup>
                <ControlLabel className={styles.label}>Telefone</ControlLabel>
                <FormControl
                  type='text'
                  ref='customerPhone'
                  name='customerPhone'
                  placeholder='(11)91234-5678'
                  className={styles.largeInput}
                />
              </FormGroup>
            </div>
            <div className={styles.row} >
              {/* Novo campo */}
              <FormGroup>
                <ControlLabel className={styles.label}>E-mail</ControlLabel>
                <FormControl
                  type='email'
                  ref='customerEmail'
                  name='customerEmail'
                  placeholder='john.doe@world.com'
                  className={styles.largeInput}
                />
              </FormGroup>
            </div>
            <div className={styles.halfRow} >
              {/* Novo campo */}
              <FormGroup>
                <ControlLabel className={styles.smallLabelLeft}>Sexo</ControlLabel>
                <FormControl
                  ref='customerGender'
                  componentClass='select'
                  className={styles.smallInputLeft}>
                    <option value='male'>Masculino</option>
                    <option value='female'>Feminino</option>
                </FormControl>
              </FormGroup>
              <FormGroup>
                <ControlLabel className={styles.smallLabelRight}>Data de nascimento</ControlLabel>
                <FormControl
                  type='date'
                  ref='customerBirthDate'
                  name='customerBirthDate'
                  placeholder='dd/mm/aaaa'
                  className={styles.smallInputRight}
                />
              </FormGroup>
            </div>
            <div className={styles.row}>
              <FormGroup>
                <ControlLabel className={styles.label}>Plano</ControlLabel>
                <FormControl
                  ref='customerPlan'
                  componentClass='select'
                  className={styles.largeInput}>
                    <option value='plan_VGz8EbHQETgpoav1'>Plano A</option>
                    <option value='plan_NAGgpBFXkSko5Yx2'>Plano B</option>
                    <option value='plan_867Om9Iv4HLnORr3'>Plano C</option>
                </FormControl>
              </FormGroup>
            </div>
          </Form>
        </div>

        <div className={styles.rightDiv}>
          <div className={styles.rowCard}>
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
          </div>
          <div className={styles.rowCardForm}>
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
        </div>
      </div>
    );
  }
}

export default NewSignatureMundiForm;
