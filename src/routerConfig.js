import React from 'react';
import {
  Header,
  Footer,
  // CartProducts,
  // PurchaseSummary,
  PurchaseAndShippingSummary,
  PaymentDetails
} from "./components/";

const routes = [
  {
    path: "/",
    exact: true,
    render: () => (
      <div className="generalContainer">
        <Header />
        <PurchaseAndShippingSummary />
        <PaymentDetails />
        <Footer />
      </div>
    )
  }
];

export default routes;
