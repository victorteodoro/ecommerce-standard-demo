// General imports from libs
/*eslint-disable*/
import React from 'react';
import { map, addIndex } from 'ramda';

// Import styles
import styles from './styles.css';

// Importing assets
import subsLucas from '../../../resources/SignatureScreen/inputs/subsLucas';
import MundipaggRecurrencyConnector from '../../../helpers/recurrency';

const mapIndexed = addIndex(map);

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpened: this.props.isModalOpen,
      formDiscounts: false,
      formItens: false,
      discountsValue: 'discountsvalue1',
      discountsType: 'flat',
      discountsCycles: '1',
      itensName: 'itensname',
      itensDescription: 'itensdescription',
      itensValue: 'itensvalue',
      itensCycles: '1'
    };
    this.modalToggle = this.modalToggle.bind(this);
    this.openFormDiscounts = this.openFormDiscounts.bind(this);
    this.openFormItens = this.openFormItens.bind(this);
    this.addItem = this.addItem.bind(this);
    this.addDiscounts = this.addDiscounts.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addItemFunction() {
    const subsId = this.props.input[this.props.inputIndex].id;
    const reqBodyAddItems = {
      name: this.state.itensName,
      description: this.state.itensDescription,
      pricing_scheme: {
        price: this.state.itensValue
      },
      cycles: this.state.itensCycles,
      quantity: 1
    };
    MundipaggRecurrencyConnector('POST', `subscriptions/${subsId}/items`, reqBodyAddItems);
  }

  addDiscountFunction() {
    const subsId = this.props.input[this.props.inputIndex].id;
    const reqBodyAddDiscounts = {
      value: this.state.discountsValue,
      discount_type: this.state.discountsType,
      cycles: this.state.discountsCycles
    };
    MundipaggRecurrencyConnector('POST', `subscriptions/${subsId}/discounts`, reqBodyAddDiscounts);
  }

  handleChange(event) {
    const field = event.target.name;
    this.setState({
      [field]: event.target.value
    });
  }

  static itemObj(items, index) {
    const itemValue = `R$ + ${items.pricing_scheme.price / 100}`;

    return (
      <div className={styles.itemRow} key={index} >
        <div>
          Nome: {items.description}
        </div>
        <div>
          Valor: {itemValue}
        </div>
        <div>
          Quantidade: {items.quantity}
        </div>
      </div>
    );
  }

  static discountObj(discount, index) {
    let discountType;
    let discountStatus;
    let discountAmount;

    discountAmount = discount.value;

    if (discount.discount_type === 'flat') {
      discountType = 'Reais';
      discountAmount = `R$ + ${discount.value / 100}`;
    } else {
      discountType = 'Percentual';
    }
    if (discount.status === 'active') {
      discountStatus = 'Ativo';
    } else {
      discountStatus = 'Inativo';
    }

    return (
      <div className={styles.discountRow} key={index} >
        <div>
          Valor: {discountAmount}
      </div>
        <div>
          Tipo: {discountType}
      </div>
        <div>
          Status: {discountStatus}
      </div>
      </div>
    );
  }

  static listDiscounts(discounts) {
    let i = 0;
    let discountsList = ``;
    for (i = 0; i < discounts.length; i += 1) {
      discountsList += `Desconto ${i}
        id: ${discounts[i].id},
        value: ${discounts[i].value},
        discount_type: ${discounts[i].discount_type},
        cycles: ${discounts[i].cycles},
        status: ${discounts[i].status},
        createdAt: ${discounts[i].createdAt}
      `;
    }
    return discountsList;
  }
  static listItens(itens) {
    let i = 0;
    let itensList = '';
    for (i = 0; i < itens.length; i += 1) {
      itensList += `Item ${i}
       Descrição: ${itens[i].description},
       Quantidade: ${itens[i].quantity},
       Valor: ${itens[i].pricingScheme.price}
      `;
    }
    return itensList;
  }
  modalToggle() {
    this.setState({ modalOpened: !this.state.modalOpened });
  }
  openFormDiscounts() {
    this.setState({ formDiscounts: !this.state.formDiscounts });
  }
  openFormItens() {
    this.setState({ formItens: !this.state.formItens });
  }
  addItem() {
    this.addItemFunction();
  }
  addDiscounts() {
    this.addDiscountFunction();
    // this.addDiscountFunction();
  }
  render() {
    if (this.state.modalOpened === false) {
      return null;
    } else {
      // Altera os valores das variáveis coverClass e containerClass, que dão estilo 'block' ou
      // 'none' ao modal;
      const coverClass = this.props.isModalOpen ? styles.modalCoverActive : styles.modalCover;
      const containerClass = this.props.isModalOpen ?
        styles.modalContainerActive : styles.modalContainer;
      const divTextDiscounts = this.state.formDiscounts ?
        styles.modalDiscountsTextFalse : styles.modalDiscountsTextTrue;
      const divFormDiscounts = this.state.formDiscounts ?
        styles.modalDiscountsFormTrue : styles.modalDiscountsFormFalse;
      const divTextItens = this.state.formItens ?
        styles.modalItensTextFalse : styles.modalItensTextTrue;
      const divFormItens = this.state.formItens ?
        styles.modalItensFormTrue : styles.modalItensFormFalse;
      return (
        <div>
          <div className={containerClass}>
            <div className={styles.modalGrid}>
              <div className={styles.modalHeader}>
                <div className={styles.modalPlanName}>
                  {this.props.input[this.props.inputIndex].plan.name}
                </div>
                <div className={styles.modalPlanData}>
                  <p>Id do plano:
                    <span> {this.props.input[this.props.inputIndex].plan.id}</span></p>
                </div>
                <div className={styles.modalPlanData}>
                  <p>Periodicidade:
                    <span> {this.props.input[this.props.inputIndex].plan.interval}
                    {this.props.input[this.props.inputIndex].billingType}</span></p>
                </div>
                <div className={styles.modalPlanData}>
                  <p>Período:
                    <span> {this.props.input[this.props.inputIndex].plan.interval_count}</span></p>
                </div>
                <div className={styles.modalPlanData}>
                  <p>Valor:
                    <span>R$ {this.props.amount}</span></p>
                </div>
                <div className={styles.modalPlanData}>
                  <p>Começo em:
                    <span>
                     {this.props.input[this.props.inputIndex].current_cycle.start_at.substring(0, 10)}
                    </span></p>
                </div>
                <div className={styles.modalPlanData}>
                  <p>Término em: <span>
                    {this.props.input[this.props.inputIndex].current_cycle.end_at.substring(0, 10)}
                  </span></p>
                </div>
                <div className={styles.modalPlanData}>
                  <p>Próxima cobrança:
                    <span>
                     {this.props.input[this.props.inputIndex].current_cycle.billing_at.substring(0, 10)}
                    </span></p>
                </div>
                <div className={styles.modalPlanData}>
                  <p>Payment Method:
                    <span> {this.props.input[this.props.inputIndex].payment_method}</span></p>
                </div>
              </div>
              <div className={styles.modalDiscountsDiv}>
                <div className={styles.modalDiscountsTitle}>
                  Descontos
                </div>
                <div className={styles.modalBtn1} >
                  <button className={styles.btn} onClick={this.openFormDiscounts}>Add</button>
                </div>
                <div className={divTextDiscounts}>
                  {
                    mapIndexed(this.discountObj, this.props.input[this.props.inputIndex].discounts)
                  }
                </div>
                <div className={divFormDiscounts}>
                  <div>Valor (centavos / porcentagem):</div>
                  <div>
                    <form>
                      <input
                        type='text'
                        name='discountsValue'
                        onChange={this.handleChange}
                        className={styles.modalInput40} />
                    </form>
                  </div>
                  <div>Tipo do desconto:</div>
                  <div>
                    <form>
                      <select
                        className={styles.modalSelectInput}
                        name='discountsType'
                        onChange={this.handleChange}
                        defaultValue='flat'>
                        <option value='flat'>Reais</option>
                        <option value='percentage'>Porcentagem</option>
                      </select>
                    </form>
                  </div>
                  <div>Ciclos de cobrança:</div>
                  <div>
                    <form>
                      <select
                        className={styles.modalSelectInput}
                        name='discountsCycles'
                        onChange={this.handleChange}
                        defaultValue='1'>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                        <option value='99'>99</option>
                      </select>
                    </form>
                  </div>
                  <div className={styles.modalFormDiscountsBtn}>
                    <button className={styles.btn} onClick={this.addDiscounts} >Adicionar desconto</button>
                  </div>
                </div>
              </div>
              <div className={styles.modalItensDiv}>
                <div className={styles.modalItensTitle}>
                  Itens
                </div>
                <div className={styles.modalBtn1} >
                  <button className={styles.btn} onClick={this.openFormItens} >Add</button>
                </div>

                {/* //aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */}
                {/* //aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */}
                {/* //aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */}

                <div className={divTextItens}>
                  {
                    mapIndexed(this.itemObj, this.props.input[this.props.inputIndex].items)
                  }
                </div>
                <div className={divFormItens}>
                  <div>Nome:</div>
                  <div>
                    <form>
                      <input
                        type='text'
                        name='itensName'
                        onChange={this.handleChange}
                        className={styles.modalInput80} />
                    </form>
                  </div>
                  <div>Descrição:</div>
                  <div>
                    <form>
                      <input
                        type='text'
                        name='itensDescription'
                        onChange={this.handleChange}
                        className={styles.modalInput80} />
                    </form>
                  </div>
                  <div>Valor (centavos):</div>
                  <div>
                    <form>
                      <input
                        type='text'
                        name='itensValue'
                        onChange={this.handleChange}
                        className={styles.modalInput40} />
                    </form>
                  </div>
                  <div>Ciclos de cobrança:</div>
                  <div>
                    <form>
                      <select
                        className={styles.modalSelectInput}
                        name='itensCycles'
                        onChange={this.handleChange}
                        defaultValue='1'>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                        <option value='99'>99</option>
                      </select>
                    </form>
                  </div>
                  <div className={styles.modalFormItensBtn}>
                    <button className={styles.btn} onClick={this.addItem} >Adicionar item</button>
                  </div>
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
      amount: '0',
      subscriptions: subsLucas
    };
    this.modalToggle2 = this.modalToggle2.bind(this);
    this.requestInfos = this.requestInfos.bind(this);
    this.requestInfos();
  }

  requestInfos() {
    MundipaggRecurrencyConnector('GET', `subscriptions?customer_id=${this.props.customerInfos.cusId}`, '')
      .then(resp => (this.handleResponse(resp)));
  }

  handleResponse(resp) {
    // const customerInfo = resp.data;
    this.setState({
      subscriptions: resp.data.data
    });
  }

  // modalToggle2: Alterar estado do para que o modal seja aberto
  modalToggle2(index, amount) {
    this.setState(
      {
        isModalOpen: !this.state.isModalOpen,
        subscriptionIndex: index,
        amount: amount
      },
    );
  }

  // Popula as linhas de assinaturas de acordo com um input dado
  static populateSubscriptions(subsInfos, index, self) {
    let amount = 0;
    let discountPercent = 0;
    let discountAmount = 0;
    let i = 0;
    let j = 0;

    // Calculando o amount da assinatura,
    // já que não vem nessa requisição o valor fechado, apenas os itens e descontos
    for (i = 0; i < subsInfos.items.length; i += 1) {
      amount += parseInt(subsInfos.items[i].pricing_scheme.price);
    }
    for (j = 0; j < subsInfos.discounts.length; j += 1) {
      if (subsInfos.discounts[j].discount_type === 'percentage') {
        discountPercent += parseInt(subsInfos.discounts[j].value);
      } else {
        discountAmount += parseInt(subsInfos.discounts[j].value);
      }
    }
    amount = (amount * ((100 - discountPercent) / 100) - discountAmount) / 100;

    // Retornando as linhas de assinaturas
    return (
      // A arrowfunction do onClick é necessaria para que possamos
      // mandar argumentos para o modalToggle2
      // É preciso mandar argumentos para o modalToggle2 para que
      // saibamos depois quais dados exibit no modal
      <div key={index} className={styles.rowModal} onClick={() => self.modalToggle2(index, amount)}>
        <div className={styles.plan}>{subsInfos.plan.name}</div>
        <div className={styles.startDate}>{subsInfos.start_at.substring(0, 10)}</div>
        <div className={styles.endDate}>---</div>
        <div className={styles.amount}>{`R$${amount}`}</div>
      </div>
    );
  }

  render() {
    return (
      <div className={styles.signatureInfos}>
        <div className={styles.row} ref='modalDiv'>
          {(this.state.isModalOpen ?
            <Modal
            amount={this.state.amount}
            inputIndex={this.state.subscriptionIndex}
            input={this.state.subscriptions}
            isModalOpen={this.state.isModalOpen} /> : null)}
        </div>
        <div className={styles.signatureListTitle} onClick={this.modalToggle2} >Assinaturas</div>
        <div className={styles.plan}>Plano:</div>
        <div className={styles.startDate}>Início:</div>
        <div className={styles.endDate}>Fim:</div>
        <div className={styles.amount}>Valor:</div>
        {
          mapIndexed(this.populateSubscriptions, this.state.subscriptions, this)
        }
      </div>
    );
  }
}

export default SignatureInfos;
