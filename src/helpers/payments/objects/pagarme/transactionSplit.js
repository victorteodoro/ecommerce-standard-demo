const transactionSplit = {
  amount: 96000,
  card_expiration_date: '1122',
  card_number: '4111111111111111',
  card_cvv: '123',
  card_holder_name: 'Victor Teodoro',
  capture: true,
  metadata: {
    Produtos_1: 'Motorola G5S',
    Id_1: '220655'
  },
  customer: {
    email: 'victor.teodoro@stone.com.br',
    name: 'Victor Teodoro',
    document_number: '44749039861',
    address: {
      zipcode: '01225000',
      neighborhood: 'Centro',
      street: 'Rua Frederico Abranches',
      street_number: '104'
    },
    phone: {
      number: '987654321',
      ddd: '11'
    }
  },
  async: false,
  split_rules: [
    {
      recipient_id: 're_cjf8t4z9004k5uq6eqeb8c1a7',
      charge_processing_fee: 'true',
      percentage: '20',
      liable: 'false',
      charge_remainder: 'true'
    },
    {
      recipient_id: 're_cjf8t5qkw03o3uq6dko17o4vt',
      charge_processing_fee: 'false',
      percentage: '80',
      liable: 'true',
      charge_remainder: 'false'
    }
  ],
  installments: 1,
  payment_method: 'credit_card',
  soft_descriptor: 'StoneStore'
};

export default transactionSplit;
