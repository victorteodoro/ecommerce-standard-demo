import React from 'react';
import {
  CheckoutScreen,
  CartScreen,
  InventoryScreen,
  SignatureScreen,
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
