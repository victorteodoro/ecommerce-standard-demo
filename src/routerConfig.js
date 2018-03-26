import React from 'react';
import {
  CheckoutScreen,
  CartScreen,
  InventoryScreen,
  SignatureScreen,
  FinishScreen
} from './containers/';

const routes = [
  {
    path: '/',
    exact: true,
    render: () => (
      <InventoryScreen type='ecommerce' />
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
    path: '/marketplace',
    exact: true,
    render: () => (
      <InventoryScreen type='marketplace' />
    )
  },
  {
    path: '/signature/',
    exact: true,
    render: () => (
      <SignatureScreen />
      // <SignatureScreen planList={planList}/>
    )
  },
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
