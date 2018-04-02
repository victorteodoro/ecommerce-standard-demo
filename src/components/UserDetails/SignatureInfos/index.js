/* eslint-disable */
// General imports from libs
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

// Import styles
import styles from './styles.css';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpened: this.props.isModalOpen
    };
    this.modalToggle = this.modalToggle.bind(this);
    console.log('(child) -> iniciateModal, modalOpened', this.state.modalOpened);
    console.log('(child/parent) -> iniciateModal, modalOpen', this.props.isModalOpen);
  }
  modalToggle() {
    this.setState({ modalOpened: !this.state.modalOpened },
      () => {
        console.log(this.state.modalOpened);
      });
    }
    
    // iniciateModal() {
      //   this.setState({ modalOpened: true },
      //     () => console.log('(child) -> iniciateModal, modalOpened', this.state.modalOpened));
      // }
      
      render() {
        // iniciateModal;
        console.log('<<<<<< entrou render modal');
        const coverClass = this.state.modalOpened ? styles.modalCoverActive : styles.modalCover;
        const containerClass = this.state.modalOpened ?
        styles.modalContainerActive : styles.modalContainer;
        // const coverClass = this.props.isModalOpen ? styles.modalCoverActive : styles.modalCover;
        // const containerClass = this.props.isModalOpen ?
        //   styles.modalContainerActive : styles.modalContainer;
        console.log('(child) -> this.isOpen: ', this.isOpen);
        console.log('(child) -> this.props.isModalOpen: ', this.props.isModalOpen);
        console.log('(child) -> this.state.modalOpened: ', this.state.modalOpened);
        return (
          <div>
        {/* <button className='btn btn-primary' onClick={this.modalToggle}>Modal</button> */}
        <div className={containerClass}>
          <div className='modal-header'>
            HEADER
          </div>
          <div className='modal-body'>
            BODY
          </div>
          <div className='modal-footer'>
            FOOTER
          </div>
        </div>
        <div className={coverClass} onClick={this.modalToggle}></div>
      </div>
    );
  }
}
//  SIGNATURE INFO <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//  SIGNATURE INFO <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//  SIGNATURE INFO <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//  SIGNATURE INFO <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
class SignatureInfos extends React.Component {
  constructor(props) {
    super(props);
    // set initial state
    this.state = {
      isModalOpen: false
    };
    this.modalToggle2 = this.modalToggle2.bind(this);
  }
  
  modalToggle2() {
    console.log('(parent) -> Entrou no modalToggle2 ');
    this.setState({ isModalOpen: !this.state.isModalOpen },
      () => {
        console.log('(parent) -> this.state.isModalOpen: ', this.state.isModalOpen);
        console.log('modalDiv innerHTML', ReactDOM.findDOMNode(this.refs.modalDiv).innerHTML)
        
        return (
          // console.log(ReactDOM.findDOMNode(this.refs.modalDiv).innerHTML)
          ReactDOM.findDOMNode(this.refs.modalDiv).innerHTML = <Modal isModalOpen={this.state.isModalOpen} />
          // <Modal isModalOpen={this.state.isModalOpen} />
        );
      });
    }
    
    render() {
      return (
        <div className={styles.signatureInfos}>
        <div className={styles.row} ref='modalDiv'>
          aabbbbccc
        </div>
        <div className={styles.signatureListTitle}>Assinaturas</div>
        <div className={styles.plan}>Plano:</div>
        <div className={styles.startDate}>Início:</div>
        <div className={styles.endDate}>Fim:</div>
        <div className={styles.amount}>Valor:</div>
        <div className={styles.row} onClick={this.modalToggle2}>
          <div className={styles.plan}>{this.state.isModalOpen}</div>
          <div className={styles.startDate}>25/03/2018</div>
          <div className={styles.endDate}>25/04/2018</div>
          <div className={styles.amount}>R$ 250,00</div>
        </div>
        <Link className={styles.row} to={`/signature/adm/clients/`}>
          <div className={styles.plan}>Plano XPTO</div>
          <div className={styles.startDate}>25/03/2018</div>
          <div className={styles.endDate}>25/04/2018</div>
          <div className={styles.amount}>R$ 250,00</div>
        </Link>
        <Link className={styles.row} to={`/signature/adm/clients/`}>
          <div className={styles.plan}>Plano XPTO</div>
          <div className={styles.startDate}>25/03/2018</div>
          <div className={styles.endDate}>25/04/2018</div>
          <div className={styles.amount}>R$ 250,00</div>
        </Link>
        <Link className={styles.row} to={`/signature/adm/clients/`}>
          <div className={styles.plan}>Plano XPTO</div>
          <div className={styles.startDate}>25/03/2018</div>
          <div className={styles.endDate}>25/04/2018</div>
          <div className={styles.amount}>R$ 250,00</div>
        </Link>
      </div>
    );
  }
}

export default SignatureInfos;
/* eslint-enable */
