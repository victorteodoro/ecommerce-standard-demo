// General imports from libs
import React from 'react';

// Import components
import PurchaseSummary from '../PurchaseSummary/';
import ShippingDetails from '../ShippingDetails/';

const PurchaseAndShippingSummary = () => (
  <div className="purchaseAndShippingSummary">
    <PurchaseSummary />
    <ShippingDetails />
  </div>
);

export default PurchaseAndShippingSummary;
