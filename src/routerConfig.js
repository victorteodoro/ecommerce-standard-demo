import React from 'react';
import {
  Header,
  Footer,
  CartProducts,
  PurchaseSummary,
  PurchaseAndShippingSummary
} from "./components/";

const routes = [
  {
    path: "/",
    exact: true,
    render: () => (
      <div className="container">
        <Header />
        <PurchaseAndShippingSummary />
        <Footer />
      </div>
    )
  }
];

export default routes;
