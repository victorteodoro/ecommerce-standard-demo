import axios from 'axios';
import Promise from 'bluebird';

let URL = 'http://solutions-api.herokuapp.com/risotto/kanguru_';

const kanguru = (method, path, body) => {
  if (method === 'GET') {
    URL += 'get';
  } else if (method === 'POST') {
    URL += 'post';
  } else if (method === 'PUT') {
    URL += 'put';
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

export default kanguru;
