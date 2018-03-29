import React from 'react';

import {
  Header,
  Footer,
  // PurchaseSummaryNew,
  UserInfos,
  UserHeader,
  SignatureInfos
} from '../../../../../components/';

import { MundipaggConnector } from '../../../../../helpers/payments';

import styles from './styles.css';


class AdmClientsIdScreen extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      pageId: window.location.href.substring(window.location.href.lastIndexOf('/') + 1),
      customer: {
        name: '',
        email: '',
        birthDate: '',
        document: '',
        // phone: '',
        gender: '',
        userSince: '',
        userCode: '',
        userId: '',
        localPath: `customers?code=${window.location.href.substring(window.location.href.lastIndexOf('/') + 1)}`
      }
    };
    this.handleResponse = this.handleResponse.bind(this);
    this.requestInfos = this.requestInfos.bind(this);
    // this.requestSubscriptionsInfos = this.requestSubscriptionsInfos.bind(this);
    // this.handleResponseSubscription = this.handleResponseSubscription.bind(this);
    this.requestInfos();
  }

  requestInfos() {
    console.log('entrou na request infos customer');
    MundipaggConnector('GET', this.state.customer.localPath, { abobora: 'abobora' })
      .then(resp => (this.handleResponse(resp)));
  }

  // requestSubscriptionsInfos() {
  //   console.log('entrou na request infos subs');
  //   MundipaggConnector('GET', 'subscriptions?customer_id=cus_95xKqdlH7S9bJm4g',
  // { abobora: 'abobora' })
  //     .then(subsResp => (this.handleResponseSubscription(subsResp)));
  // }

  // handleResponseSubscription(respSubs) {
  //   console.log('entrou na handle response subs');
  //   console.log(this.state.customer.name);
  //   console.log(respSubs);
  // }

  handleResponse(resp) {
    console.log('entrou na handle response');
    const customerInfo = resp.data.data[0];
    this.setState({
      customer: {
        name: customerInfo.name,
        email: customerInfo.email,
        birthDate: customerInfo.birthdate,
        document: customerInfo.document,
        // phone: '',
        gender: customerInfo.gender,
        userSince: customerInfo.created_at,
        userCode: customerInfo.code,
        userId: customerInfo.id
      }
    });
  }

  componentWillMount() {
  // componentDidMount() {
    console.log('onmount');
    console.log(this.state.customer.localPath);
  }
  render() {
    return (
      <div className={styles.generalContainer}>
        <Header />
        <UserHeader customerInfos={this.state.customer} />
        <UserInfos customerInfos={this.state.customer} />
        <SignatureInfos />
        <Footer />
      </div>
    );
  }
}

export default AdmClientsIdScreen;
