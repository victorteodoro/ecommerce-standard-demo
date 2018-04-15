/* eslint-disable */
import axios from 'axios';
import Promise from 'bluebird';

let URL = 'http://solutions-api.herokuapp.com/risotto/mundipagg_boleto_post';
const mundipagg = (method, path, body) => {
  if (method === 'GET') {
    URL = 'http://solutions-api.herokuapp.com/risotto/mundipagg_boleto_get';
  } else if (method === 'POST') {
    URL = 'http://solutions-api.herokuapp.com/risotto/mundipagg_boleto_post';
  } else if (method === 'PATCH') {
    URL = 'http://solutions-api.herokuapp.com/risotto/mundipagg_boleto_patch';
  } else if (method === 'DELETE') {
    URL = 'http://solutions-api.herokuapp.com/risotto/mundipagg_boleto_delete';
  } else {
    URL = 'http://solutions-api.herokuapp.com/risotto';
  }
  const risotto = {
    path,
    body
  };
  return Promise.resolve(axios.post(`${URL}`, { risotto }));
};

export default mundipagg;
/* eslint-enable */
