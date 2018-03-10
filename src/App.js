// General imports from libs
import React from 'react';
import { map, addIndex } from 'ramda';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Import routes
import routes from './routerConfig';

// Import styles
import './App.css';

const mapIndexed = addIndex(map);

const routing = (route, index) => (
  <Route
     key={index}
     path={route.path}
     exact={route.exact}
     render={route.render}
     />
);

const App = () => (
  <Router>
    <div>{mapIndexed(routing, routes)}</div>
  </Router>
);

export default App;
