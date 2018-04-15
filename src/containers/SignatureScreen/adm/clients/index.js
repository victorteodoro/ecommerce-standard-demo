/* eslint-disable */
import React from 'react';
import { map, addIndex } from 'ramda';
import { Link } from 'react-router-dom';

import {
  Header,
  Footer,
  UserCard,
  SearchBarAndButton
} from '../../../../components';

// Importing components
import UserCardsArea from '../../../UserCardsArea/';

// Importing assets
import { MundipaggConnector } from '../../../../helpers/payments';

// Importing styles
import styles from './styles.css';

const mapIndexed = addIndex(map);

const populateCards = (clients, index) => (
  <Link key={index} to={`/signature/adm/clients/${clients.id}`}>
    <UserCard key={index} clients={clients} />
  </Link>
);

class AdmClientsScreen extends React.Component {
  constructor(props) {
    super(props);
    // set initial state
    this.state = {
      isModalOpen: false,
      subscriptionIndex: '0',
      amount: '0',
      clients: []
    };
    this.handleResponse = this.handleResponse.bind(this);
    this.listClients = this.listClients.bind(this);
    this.listClients();
  }

  listClients() {
    MundipaggConnector('GET', 'customers', '')
      .then(resp => (this.handleResponse(resp)))
  }

  handleResponse(resp) {
    const clientsList = resp.data.data;
    this.setState({
      clients: clientsList
    });
  }

  render() {
    return(
      <div className={styles.generalContainer}>
        <Header />
        <SearchBarAndButton />
        <UserCardsArea clients={this.state.clients} type='user'>
          {
            mapIndexed(populateCards, this.state.clients)
          }
        </UserCardsArea>
        <Footer />
      </div>
    )
  }
}

export default AdmClientsScreen;
/* eslint-enable */
