import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import dotenv from 'dotenv';

dotenv.config({silent: true});

import App from './App';
import DisplayTopics from './components/DisplayTopics';
import AddTopic from './components/AddTopic';
import Ideas from './components/Ideas';
import './index.css';

ReactDOM.render(
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ DisplayTopics } />
      <Route path="/add" component={ AddTopic }/>

      <Route path="/ideas" component={ Ideas }/>

    </Route>
  </Router>,
  document.getElementById('root')
);
