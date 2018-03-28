// General imports from libs
import React from 'react';
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

import { charge } from '../../helpers/payments/objects/mundiobjects';
import { MundipaggConnector } from '../../helpers/payments';

// Import card component
import CardForm from '../Checkout/CardForm';

// Import styles
import styles from './styles.css';

class NewSignatureMundiForm extends React.Component {
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
      .then(resp => (NewSignatureMundiForm.handleResponse(resp)));
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
          <button className={styles.btn} > Confirmar </button>
        </div>
      </div>
        <div className={styles.leftDiv}>
          <Form>
            <div className={styles.row} >
              <FormGroup>
                <ControlLabel className={styles.label}>Nome</ControlLabel>
                <FormControl
                  type='text'
                  name='customerName'
                  placeholder='Nome do cliente'
                  className={styles.largeInput}
                // onChange={props.changeHandler}
                // onBlur={props.checkBin}
                // maxLength='16'
                />
              </FormGroup>
            </div>
            <div className={styles.row} >
              {/* Novo campo */}
              <FormGroup>
                <ControlLabel className={styles.label}>Documento</ControlLabel>
                <FormControl
                  type='text'
                  name='customerDoc'
                  placeholder='CPF'
                  className={styles.largeInput}
                // onChange={props.changeHandler}
                // onBlur={props.checkBin}
                // maxLength='16'
                />
              </FormGroup>
            </div>
            <div className={styles.row} >
              {/* Novo campo */}
              <FormGroup>
                <ControlLabel className={styles.label}>Telefone</ControlLabel>
                <FormControl
                  type='number'
                  name='customerPhone'
                  placeholder='(11)91234-5678'
                  className={styles.largeInput}
                // onChange={props.changeHandler}
                // onBlur={props.checkBin}
                // maxLength='16'
                />
              </FormGroup>
            </div>
            <div className={styles.row} >
              {/* Novo campo */}
              <FormGroup>
                <ControlLabel className={styles.label}>E-mail</ControlLabel>
                <FormControl
                  type='text'
                  name='customerEmail'
                  placeholder='john.doe@world.com'
                  className={styles.largeInput}
                // onChange={props.changeHandler}
                // onBlur={props.checkBin}
                // maxLength='16'
                />
              </FormGroup>
            </div>
            <div className={styles.halfRow} >
              {/* Novo campo */}
              <FormGroup>
                <ControlLabel className={styles.smallLabelLeft}>Sexo</ControlLabel>
                <FormControl componentClass='select' className={styles.smallInputLeft}>
                  <option value='select'>Masculino</option>
                  <option value='other'>Feminino</option>
                </FormControl>
              </FormGroup>
              <FormGroup>
                <ControlLabel className={styles.smallLabelRight}>Data de nascimento</ControlLabel>
                <FormControl
                  type='date'
                  name='customerBirthDate'
                  value=''
                  placeholder='dd/mm/aaaa'
                  className={styles.smallInputRight}
                // onChange={props.changeHandler}
                // onBlur={props.checkBin}
                // maxLength='16'
                />
              </FormGroup>
            </div>
            <div className={styles.row}>
              <FormGroup>
                <ControlLabel className={styles.label}>Plano</ControlLabel>
                <FormControl componentClass='select' className={styles.largeInput}>
                  <option value='select'>Plano A</option>
                  <option value='other'>Plano B</option>
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
