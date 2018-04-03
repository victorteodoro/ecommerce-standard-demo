import React from 'react';

import {
  Header,
  Footer,
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
        gender: '',
        userSince: '',
        userCode: '',
        userId: '',
        localPath: `customers?code=${window.location.href.substring(window.location.href.lastIndexOf('/') + 1)}`
      }
    };
    this.handleResponse = this.handleResponse.bind(this);
    this.requestInfos = this.requestInfos.bind(this);
    this.requestInfos();
  }

  requestInfos() {
    MundipaggConnector('GET', this.state.customer.localPath, { abobora: 'abobora' })
      .then(resp => (this.handleResponse(resp)));
  }

  handleResponse(resp) {
    const customerInfo = resp.data.data[0];
    this.setState({
      customer: {
        name: customerInfo.name,
        email: customerInfo.email,
        birthDate: customerInfo.birthdate,
        document: customerInfo.document,
        gender: customerInfo.gender,
        userSince: customerInfo.created_at,
        userCode: customerInfo.code,
        userId: customerInfo.id
      }
    });
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
