const charge = {
  code: 5567834,
  amount: 96000,
  currency: 'BRL',
  customer: {
    name: 'Victor Teodoro',
    email: 'victor.teodoro@stone.com.br'
  },
  payment: {
    payment_method: 'credit_card',
    credit_card: {
      recurrence: true,
      installments: 1,
      statement_descriptor: 'Planet',
      capture: true,
      card: {
        number: '5232841308053012',
        holder_name: 'Fabrizzio F Santos',
        holder_document: '44749039861',
        exp_month: '07',
        exp_year: '24',
        cvv: '519',
        billing_address: {
          street: 'Rua Frederico Abranches',
          number: '104',
          zip_code: '01225000',
          neighborhood: 'Cento',
          city: 'Sao Paulo',
          state: 'SP',
          country: 'BR'
        }
      }
    }
  }
};

export default charge;
