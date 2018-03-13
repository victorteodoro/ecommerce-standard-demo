import React from 'react';
import {
  FormGroup,
  ControlLabel,
  FormControl
} from 'react-bootstrap';

// Import styles
import styles from './styles.css';

const CardForm = props => (
  <form className={styles.cardForm}>
    <FormGroup validationState={props.validationState()}>
      <ControlLabel>Número do cartão</ControlLabel>
      <FormControl
         type="text"
         name="cardNumber"
         value={props.cardNumber}
         placeholder="Número do cartão"
         onChange={props.changeHandler}
         onBlur={props.checkBin}
         maxLength="16"
         />
      <FormControl.Feedback />
    </FormGroup>

    <FormGroup
       validationState={props.validationState()}
       >
      <ControlLabel>Nome do titular</ControlLabel>
      <FormControl
         type="text"
         name="holderName"
         value={props.holderName}
         placeholder="Nome escrito no cartão"
         onChange={props.changeHandler}
         maxLength="40"
         />
      <FormControl.Feedback />
    </FormGroup>

    <FormGroup
       validationState={props.validationState()}
       className={styles.expiryMonth}
       >
      <ControlLabel>Mês</ControlLabel>
      <FormControl
         type="text"
         name="expiryMonth"
         value={props.expiryMonth}
         placeholder="mm"
         onChange={props.changeHandler}
         maxLength="2"
         />
      <FormControl.Feedback />
    </FormGroup>

    <FormGroup
       validationState={props.validationState()}
       className={styles.expiryYear}
       >
      <ControlLabel>Ano</ControlLabel>
      <FormControl
         type="text"
         name="expiryYear"
         value={props.expiryYear}
         placeholder="aa"
         onChange={props.changeHandler}
         maxLength="2"
         />
      <FormControl.Feedback />
    </FormGroup>

    <FormGroup
       validationState={props.validationState()}
       className={styles.CVV}
       >
      <ControlLabel>CVV</ControlLabel>
      <FormControl
         type="text"
         name="cvv"
         value={props.cvv}
         placeholder="cvv"
         onChange={props.changeHandler}
         onFocus={props.flipCard}
         onBlur={props.flipCard}
         maxLength="4"
         />
      <FormControl.Feedback />
    </FormGroup>
  </form>
);

export default CardForm;
