import axios from 'axios';
import Promise from 'bluebird';

let URL = 'http://solutions-api.herokuapp.com/risotto/pagarme_post';

const pagarme = (method, path, body) => {
  if (method === 'GET') {
    URL = 'http://solutions-api.herokuapp.com/risotto/pagarme_get';
  } else if (method === 'POST') {
    URL = 'http://solutions-api.herokuapp.com/risotto/pagarme_post';
  } else if (method === 'PUT') {
    URL = 'http://solutions-api.herokuapp.com/risotto/pagarme_put';
  } else if (method === 'DELETE') {
    URL = 'http://solutions-api.herokuapp.com/risotto/pagarme_delete';
  } else {
    URL = 'http://solutions-api.herokuapp.com/risotto';
  }
  const risotto = {
    path,
    body
  };
  return Promise.resolve(axios.post(`${URL}`, { risotto }));
};

export default pagarme;
