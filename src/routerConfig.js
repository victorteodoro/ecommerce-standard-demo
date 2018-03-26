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
      <CartScreen type='ecommerce' />
    )
  },
  {
    path: '/marketplace/cart',
    exact: true,
    render: () => (
      <CartScreen type='marketplace' />
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
      <CheckoutScreen type='ecommerce' />
    )
  },
  {
    path: '/marketplace/checkout',
    exact: true,
    render: () => (
      <CheckoutScreen type='marketplace' />
    )
  },
  {
    path: '/ecommerce/finish',
    exact: true,
    render: () => (
      <FinishScreen />
    )
  },
  {
    path: '/marketplace/finish',
    exact: true,
    render: () => (
      <FinishScreen />
    )
  }
];

export default routes;
