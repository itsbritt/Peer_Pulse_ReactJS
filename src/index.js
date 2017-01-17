import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import dotenv from 'dotenv';

dotenv.config({ silent: true });

import App from './App';
import Home from './components/Home';
import AddTopic from './components/AddTopic';
import './index.css';

ReactDOM.render(
  <Router history={ hashHistory }>
    <Route path="/" component={ App }/>
      <Route path="/home" component={ Home }/>
      <Route path="/add" component={ AddTopic }/>
  </Router>,
  document.getElementById('root')
);
