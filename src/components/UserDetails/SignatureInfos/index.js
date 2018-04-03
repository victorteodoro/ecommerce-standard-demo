/* eslint-disable */
// General imports from libs
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { map, addIndex } from 'ramda';

// Import styles
import styles from './styles.css';

// Importing assets
import subsLucas from '../../../resources/SignatureScreen/inputs/subsLucas';

const mapIndexed = addIndex(map);

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpened: this.props.isModalOpen
    };
    this.modalToggle = this.modalToggle.bind(this);
  }
  modalToggle() {
    this.setState({ modalOpened: !this.state.modalOpened })
  }
  render() {
    if(this.state.modalOpened==false) {
      return null;
    }
    else{
      // Altea os valores das variáveis coverClass e containerClass, que dão estilo 'block' ou
      //'none' ao modal;
      const coverClass = this.props.isModalOpen ? styles.modalCoverActive : styles.modalCover;
      const containerClass = this.props.isModalOpen ?
      styles.modalContainerActive : styles.modalContainer;
      return (
        <div>
          <div className={containerClass}>
            <div className={styles.modalGrid}>
              <div className={styles.modalHeader}>
                <div className={styles.modalPlanName}>
                  {this.props.input[this.props.inputIndex].plan.name}
                </div>
                <div className={styles.modalPlanData}>
                  <p>Id do plano: <span>{this.props.input[this.props.inputIndex].plan.id}</span></p>
                </div>
                <div className={styles.modalPlanData}>
                  <p>Periodicidade: <span>{this.props.input[this.props.inputIndex].plan.interval} {this.props.input[this.props.inputIndex].billingType}</span></p>
                </div>
                <div className={styles.modalPlanData}>
                  <p>Período: <span>{this.props.input[this.props.inputIndex].plan.interval_count}</span></p>
                </div>
                <div className={styles.modalPlanData}>
                  <p>Valor: <span>R$ {this.props.amount}</span></p>
                </div>
                <div className={styles.modalPlanData}>
                  <p>Começo em: <span>{this.props.input[this.props.inputIndex].currentCycle.startAt.substring(0, 10)}</span></p>
                </div>
                <div className={styles.modalPlanData}>
                  <p>Término em: <span>{this.props.input[this.props.inputIndex].currentCycle.endAt.substring(0, 10)}</span></p>
                </div>
                <div className={styles.modalPlanData}>
                  <p>Próxima cobrança: <span>{this.props.input[this.props.inputIndex].currentCycle.billingAt.substring(0, 10)}</span></p>
                </div>
                <div className={styles.modalPlanData}>
                  <p>Payment Method: <span>{this.props.input[this.props.inputIndex].paymentMethod}</span></p>
                </div>
              </div>
              <div className={styles.modalDiscountsDiv}>
                <div className={styles.modalDiscountsTitle}>
                  Discounts
                </div>
                <div className={styles.modalBtn1} >
                  <button className={styles.btn} >Adicionar</button>
                </div>
              </div>
              <div className={styles.modalItensDiv}>
                <div className={styles.modalItensTitle}>
                  Itens
                </div>
                <div className={styles.modalBtn1} >
                  <button className={styles.btn} >Adicionar</button>
                </div>
              </div>
              <div className={styles.modalMetadata}>
                Metadata: ID -> {this.props.input[this.props.inputIndex].metadata.id}
              </div>
            </div>
          </div>
        <div className={coverClass} onClick={this.modalToggle}></div>
      </div>
      );
    }
  }
}

//  SIGNATURE INFO <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

class SignatureInfos extends React.Component {
  constructor(props) {
    super(props);
    // set initial state
    this.state = {
      isModalOpen: false,
      subscriptionIndex: '0',
      amount: '0'
    };
    this.modalToggle2 = this.modalToggle2.bind(this);
  }

  //modalToggle2: Alterar estado do para que o modal seja aberto
  modalToggle2(index, amount) {
    this.setState(
      {
        isModalOpen: !this.state.isModalOpen, teste: 'oier',
        subscriptionIndex: index,
        amount: amount
      },
  );
  }
  // modalToggle2(e) {
  //   this.setState({ isModalOpen: !this.state.isModalOpen, teste: 'oier' });
  //   console.log('modaltoggle2 this -> ', e)
  // }

  //Popula as linhas de assinaturas de acordo com um input dado
  populateSubscriptions(subsInfos, index, self) {
    let amount = 0;
    let discountPercent = 0;
    let discountAmount = 0;
    let i = 0;
    let j = 0;

    // Calculando o amount da assinatura, 
    // já que não vem nessa requisição o valor fechado, apenas os itens e descontos
    for (i = 0; i < subsInfos.itens.length; i++) {
      amount = amount + parseInt(subsInfos.itens[i].pricingScheme.price);
    }
    for (j = 0; i < subsInfos.discounts.length; j++) {
      if (subsInfos.discounts[j].discount_type == 'percentage') {
        discountPercent = discountPercent + parseInt(subsInfos.discounts[j].value);
      } else {
        discountAmount = discountAmount + parseInt(subsInfos.discounts[j].value);
      }
    }
    amount = (amount * ((100 - discountPercent) / 100) - discountAmount) / 100;

    //Retornando as linhas de assinaturas
    return (
      //  A arrowfunction do onClick é necessaria para que possamos mandar argumentos para o modalToggle2
      //  É preciso mandar argumentos para o modalToggle2 para que saibamos depois quais dados exibit no modal
      <div key={index} className={styles.rowModal} onClick={() => self.modalToggle2(index, amount)}>
        <div className={styles.plan}>{subsInfos.plan.name}</div>
        <div className={styles.startDate}>{subsInfos.startDate.substring(0, 10)}</div>
        <div className={styles.endDate}>---</div>
        <div className={styles.amount}>{`R$${amount}`}</div>
      </div>
    )
  }
    
    render() {
      return (
        <div className={styles.signatureInfos}>
          <div className={styles.row} ref='modalDiv'>
              {(this.state.isModalOpen ? <Modal amount={this.state.amount} inputIndex={this.state.subscriptionIndex} input={subsLucas} isModalOpen={this.state.isModalOpen} /> : null)}
              {console.log('THIS STATE TESTE', this.state.teste)}
          </div>
          <div className={styles.signatureListTitle} onClick={this.modalToggle2} >Assinaturas</div>
          <div className={styles.plan}>Plano:</div>
          <div className={styles.startDate}>Início:</div>
          <div className={styles.endDate}>Fim:</div>
          <div className={styles.amount}>Valor:</div>
          {/* Populando a div de assinaturas, passando a função populate, 
          os inputs (subsLucas) e o objeto this para servir como referência para as funções posteriores */}
          {
            mapIndexed(this.populateSubscriptions, subsLucas, this)
          }
        </div>
    );
  }
}

export default SignatureInfos;
/* eslint-enable */
