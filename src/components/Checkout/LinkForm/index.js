import React from 'react';
import {
  FormGroup,
  ControlLabel,
  FormControl
} from 'react-bootstrap';

// Import styles
import styles from './styles.css';

const LinkForm = props => (
  <form className={styles.cardForm}>
    <FormGroup
      validationState={props.validationState()}
      className={styles.nameReceive}
    >
      <ControlLabel>Nome do Pagador</ControlLabel>
      <FormControl
         type='text'
         name='nameReceive'
         value={props.nameReceive}
         placeholder='Ex.: Joao Misko'
         onChange={props.changeHandler}
         maxLength='30'
         />
    </FormGroup>

    <FormGroup
       validationState={props.validationState()}
       className={styles.telephone}
       >
      <ControlLabel>Nº Celular</ControlLabel>
      <FormControl
         type='text'
         name='telephone'
         value={props.telephone}
         placeholder='XX XXXXXXXXX'
         onChange={props.changeHandler}
         maxLength='12'
         />
    </FormGroup>

    <FormGroup
       validationState={props.validationState()}
       className={styles.email}
       >
      <ControlLabel>Email</ControlLabel>
      <FormControl
         type='email'
         name='email'
         value={props.email}
         placeholder='Ex.: jmisko@stone.com.br'
         onChange={props.changeHandler}
         maxLength='30'
         />
    </FormGroup>
  </form>
);

export default LinkForm;
