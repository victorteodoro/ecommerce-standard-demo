import React from 'react';
import { Header, Footer, PurchaseSummary, CartProducts } from "./components/";

const routes = [
  {
    path: "/",
    exact: true,
    render: () => (
      <div className="container">
        <Header />
        <CartProducts />
        <PurchaseSummary />
        <Footer />
      </div>
    )
  }
];

export default routes;
