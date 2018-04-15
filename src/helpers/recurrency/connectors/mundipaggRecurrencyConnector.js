import axios from 'axios';
import Promise from 'bluebird';


const mundipagg = (method, path, body) => {
  let URL = 'http://solutions-api.herokuapp.com/risotto/mundipagg_';
  if (method === 'GET') {
    URL += 'get';
  } else if (method === 'POST') {
    URL += 'post';
  } else if (method === 'PATCH') {
    URL += 'patch';
  } else if (method === 'DELETE') {
    URL += 'delete';
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

