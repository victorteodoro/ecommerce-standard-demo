import React from 'react';
import {
  CheckoutScreen,
  CartScreen,
  InventoryScreen
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
    path: '/ecommerce/checkout',
    exact: true,
    render: () => (
      <CheckoutScreen />
    )
  }
];

export default routes;
