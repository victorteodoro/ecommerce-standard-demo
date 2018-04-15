/* eslint-disable */
import axios from 'axios';
import Promise from 'bluebird';

let URL = 'http://solutions-api.herokuapp.com/risotto/mundipagg_post';

const mundipagg = (method, path, body) => {
  let URL = 'http://solutions-api.herokuapp.com/risotto/mundipagg_';
  if (method === 'GET') {
    URL = 'http://solutions-api.herokuapp.com/risotto/mundipagg_get';
  } else if (method === 'POST') {
    URL = 'http://solutions-api.herokuapp.com/risotto/mundipagg_post';
  } else if (method === 'PATCH') {
    URL+= 'http://solutions-api.herokuapp.com/risotto/mundipagg_patch';
  } else if (method === 'DELETE') {
    URL = 'http://solutions-api.herokuapp.com/risotto/mundipagg_delete';
  } else {
    URL = 'http://solutions-api.herokuapp.com/risotto';
  }
  const risotto = {
    path,
    body
  };
  return Promise.resolve(
    axios.post(`${URL}`, { risotto })
      .catch(function (error) {
        console.log('erro no connector ->', error.response);
      })
  );
};

export default mundipagg;
/* eslint-enable */
