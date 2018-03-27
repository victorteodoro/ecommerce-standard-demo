import React from 'react';
import {
  CheckoutScreen,
  CartScreen,
  InventoryScreen,
  AdmClientsScreen,
  AdmClientsIdScreen,
  FinishScreen
} from './containers/';

// Import resources
import carouselImgs from './resources/InventoryScreen/carouselImgs';

const routes = [
  {
    path: '/',
    exact: true,
    render: () => (
      <InventoryScreen carouselImgs={carouselImgs} />
    )
  },
  {
    path: '/ecommerce/cart',
    exact: true,
    render: () => (
      <CartScreen />
    )
  },
  {
    path: '/signature/adm/clients/',
    exact: true,
    render: () => (
      <AdmClientsScreen />
    )
  },
  {
    path: '/signature/adm/clients/:id',
    exact: true,
    render: props => (
      <AdmClientsIdScreen id={props} />
    )
  },
  // <Route exact path="/details/:id" render={(props) =>
  // <DetailsPage globalStore={globalStore} {...props} />} />
  {
    path: '/ecommerce/checkout',
    exact: true,
    render: () => (
      <CheckoutScreen />
    )
  },
  {
    path: '/ecommerce/finish',
    exact: true,
    render: () => (
      <FinishScreen />
    )
  }
];

export default routes;
