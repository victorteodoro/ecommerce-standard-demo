const order = {
  code: '1002999-2',
  items: [
    {
      amount: 96000,
      description: 'Moto G5S',
      quantity: 1
    }
  ],
  customer: {
    name: 'Andre Cavalcante',
    email: 'andre13pmc@gmail.com',
    address: {
      street: 'Rua Frederico Abranches',
      number: '104',
      zip_code: '01225000',
      neighborhood: 'Vila Buarque',
      city: 'São Paulo',
      state: 'SP',
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
      amount: 96000,
      default_payment_method: 'credit_card',
      success_url: 'https://mundipagg.com',
      accepted_payment_methods: [
        'boleto',
        'credit_card'
      ],
      billing_address: {
        street: 'Rua Frederico Abranches',
        number: '104',
        zip_code: '01225000',
        neighborhood: 'Vila Buarque',
        city: 'São Paulo',
        state: 'SP',
        country: 'BR'
      },
      credit_card: {
        capture: true,
        installments: [
          {
            number: 1,
            total: 96000
          },
          {
            number: 2,
            total: 96000
          },
          {
            number: 3,
            total: 96000
          },
          {
            number: 4,
            total: 96000
          },
          {
            number: 5,
            total: 96000
          },
          {
            number: 6,
            total: 96000
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
