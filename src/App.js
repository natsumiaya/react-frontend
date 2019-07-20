import React from 'react';
import { Router, Route } from 'react-router-dom';
import {history} from './_helpers';
import './assets/css/style.css';
import './assets/css/bootstrap-grid.min.css';

import Home from './views/Home/home.js'

function App() {
  return (
    <Router history = {history}>
      <Route path="/" component={Home}>
      </Route>
    </Router>
  );
}

export default App;
