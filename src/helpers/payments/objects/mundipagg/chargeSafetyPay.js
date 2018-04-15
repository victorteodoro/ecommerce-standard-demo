const safetyPay = {
  amount: 96000,
  currency: 'BRL',
  customer: {
    name: 'Tony Stark',
    email: 'ffsantos@stone.com.br',
    document: '24551132802',
    type: 'individual'
  },
  payment: {
    metadata: {
      code: '4'
    },
    payment_method: 'safetypay'
  },
  metadata: {
    code: 'Ecommerce Solutions'
  }
};

export default safetyPay;
