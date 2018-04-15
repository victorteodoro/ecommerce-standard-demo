const newSubscription = {
  plan_id: 'plan_1VrgOPoi0MuwxG63',
  payment_method: 'credit_card',
  currency: 'BRL',
  interval: 'month',
  interval_count: 3,
  billing_type: 'prepaid',
  installments: 1,
  customer: {
    name: 'Tony Stark',
    document: '41417353880',
    type: 'individual',
    email: 'tonystark@avengers.com',
    gender: 'Masculino',
    birthdate: '01/01/2018'
  },
  card: {
    holder_name: 'Tony Stark',
    number: '4532464862385322',
    exp_month: '1',
    exp_year: '26',
    cvv: '903',
    billing_address: {
      street: 'Av. General Justo',
      number: '375',
      complement: '9º andar',
      zip_code: '20021130',
      neighborhood: 'Centro',
      city: 'Rio de Janeiro',
      state: 'RJ',
      country: 'BR'
    }
  },
  discounts: [
    {
      cycles: '3',
      value: '10',
      discount_type: 'percentage'
    }
  ],
  items: [
    {
      description: 'Musculação',
      quantity: '1',
      pricing_scheme: {
        price: '18990'
      }
    },
    {
      description: 'Matrícula',
      quantity: '1',
      cycles: '1',
      pricing_scheme: {
        price: '5990'
      }
    }
  ],
  shipping: {
    amount: '1000',
    description: 'Entrega para teste',
    recipient_name: 'Fabrizzio',
    recipient_phone: '11 982022022',
    address: {
      id: '123',
      street: 'Rua Fidencio Ramos',
      number: '309',
      complement: '10 andar',
      zip_code: '04551010',
      neighborhood: 'Vila Olimpia',
      city: 'São Paulo',
      state: 'SP',
      country: 'BR'
    }
  },
  metadata: {
    id: 'my_subscription_id'
  }
};

export default newSubscription;
