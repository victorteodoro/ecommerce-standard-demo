import React from 'react';
import {
  CheckoutScreen
} from './containers/';


const routes = [
  {
    path: "/",
    exact: true,
    render: () => (
      <CheckoutScreen />
    )
  }
];

export default routes;
