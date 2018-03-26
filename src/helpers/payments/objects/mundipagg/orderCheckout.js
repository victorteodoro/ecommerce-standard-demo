const order = {
  code: '1002999-2',
  items: [
    {
      amount: 28000,
      description: 'Moto G1 Xt 1033 16GB',
      quantity: 1
    }
  ],
  customer: {
    name: 'Andre Cavalcante',
    email: 'andre13pmc@gmail.com',
    address: {
      street: 'Rua XPTO',
      number: '10880',
      zip_code: '23010001',
      neighborhood: 'Centro',
      city: 'Rio de Janeiro',
      state: 'RJ',
      country: 'BR'
    },
    phones: {
      mobile_phone: {
        country_code: '55',
        area_code: '19',
        number: '981576479'
      }
    }
  },
  payments: [{
    payment_method: 'checkout',
    checkout: {
      amount: 28000,
      default_payment_method: 'credit_card',
      success_url: 'https://facebook.com',
      accepted_payment_methods: [
        'boleto',
        'credit_card'
      ],
      billing_address: {
        street: 'Rua XPTO',
        number: '10880',
        zip_code: '23010001',
        neighborhood: 'Centro',
        city: 'Rio de Janeiro',
        state: 'RJ',
        country: 'BR'
      },
      credit_card: {
        capture: true,
        installments: [
          {
            number: 1,
            total: 28000
          },
          {
            number: 2,
            total: 28000
          }
        ]
      },
      boleto: {
        due_at: '2018-04-04T00:00:00',
        instructions: 'Pagar até o vencimento'
      }
    }
  }]
};

export default order;
