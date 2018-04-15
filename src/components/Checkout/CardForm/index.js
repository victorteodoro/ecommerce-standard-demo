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
         type='text'
         name='cardNumber'
         value={props.cardNumber}
         placeholder='Número do cartão'
         onChange={props.changeHandler}
         onBlur={props.checkBin}
         maxLength='16'
         />
    </FormGroup>

    <FormGroup
       validationState={props.validationState()}
       >
      <ControlLabel>Nome do titular</ControlLabel>
      <FormControl
         type='text'
         name='holderName'
         value={props.holderName}
         placeholder='Nome escrito no cartão'
         onChange={props.changeHandler}
         maxLength='40'
         />
    </FormGroup>

    <FormGroup
       validationState={props.validationState()}
       className={styles.expiryMonth}
       >
      <ControlLabel>Mês</ControlLabel>
      <FormControl
         type='text'
         name='expiryMonth'
         value={props.expiryMonth}
         placeholder='mm'
         onChange={props.changeHandler}
         maxLength='2'
         />
    </FormGroup>

    <FormGroup
       validationState={props.validationState()}
       className={styles.expiryYear}
       >
      <ControlLabel>Ano</ControlLabel>
      <FormControl
         type='text'
         name='expiryYear'
         value={props.expiryYear}
         placeholder='aa'
         onChange={props.changeHandler}
         maxLength='2'
         />
    </FormGroup>

    <FormGroup
       validationState={props.validationState()}
       className={styles.CVV}
       >
      <ControlLabel>CVV</ControlLabel>
      <FormControl
         type='text'
         name='cvv'
         value={props.cvv}
         placeholder='cvv'
         onChange={props.changeHandler}
         onFocus={props.flipCard}
         onBlur={props.flipCard}
         maxLength='4'
         />
    </FormGroup>
    <FormGroup controlId='formControlsSelect'>
      <ControlLabel>Parcelamento</ControlLabel>
      <FormControl componentClass='select'
        name='installments'
        value={props.installments}
        onChange={props.changeHandler}>
        <option value='1'>1 x Sem Juros</option>
        <option value='2'>2 x Sem Juros</option>
        <option value='3'>3 x Sem Juros</option>
        <option value='4'>4 x Sem Juros</option>
        <option value='5'>5 x Sem Juros</option>
        <option value='6'>6 x Sem Juros</option>
        <option value='7'>7 x Sem Juros</option>
        <option value='8'>8 x Sem Juros</option>
        <option value='9'>9 x Sem Juros</option>
        <option value='10'>10 x Sem Juros</option>
        <option value='11'>11 x Sem Juros</option>
        <option value='12'>12 x Sem Juros</option>
      </FormControl>
    </FormGroup>
  </form>
);

export default CardForm;
