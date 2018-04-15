import React from 'react';
import {
  CheckoutScreen,
  CartScreen,
  InventoryScreen,
  AdmClientsScreen,
  AdmClientsIdScreen,
  NewClientScreen,
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
    path: '/ecommerce',
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
    path: '/signature/adm/clients/',
    exact: true,
    render: () => (
      <AdmClientsScreen />
    )
  },
  {
    path: '/signature/adm/new/',
    exact: true,
    render: () => (
      <NewClientScreen />
    )
  },
  {
    path: '/signature/adm/clients/:id',
    exact: true,
    render: props => (
      <AdmClientsIdScreen id={props} />
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
      <FinishScreen type='ecommerce' />
    )
  },
  {
    path: '/marketplace/finish',
    exact: true,
    render: () => (
      <FinishScreen type='marketplace' />
    )
  }
];

export default routes;
