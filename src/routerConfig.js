import React from 'react';
import {
  CheckoutScreen,
  CartScreen,
  InventoryScreen,
  SignatureScreen
} from './containers/';


const routes = [
  {
    path: "/",
    exact: true,
    render: () => (
      <InventoryScreen />
    )
  },
  {
    path: "/ecommerce/cart",
    exact: true,
    render: () => (
      <CartScreen />
    )
  },
  {
    path: "/signature/",
    exact: true,
    render: () => (
      <SignatureScreen />
    )
  },
  {
    path: "/ecommerce/checkout",
    exact: true,
    render: () => (
      <CheckoutScreen />
    )
  }
];

export default routes;
