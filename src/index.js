import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import dotenv from 'dotenv';

import DisplayTopics from './components/DisplayTopics';
import Ideas from './components/Ideas';

dotenv.config({ silent: true });

import App from './App';
import Home from './components/Home';
import AddTopic from './components/AddTopic';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
  <Router history={ hashHistory }>
    <Route path="/" component={ App }/>
      <Route path="/home" component={ Home }/>
      <Route path="/add" component={ AddTopic }/>
      <Route path = "/mytopics" component={DisplayTopics} />
      <Route path = "/ideas" component={ Ideas } />
  </Router>,
  document.getElementById('root')
);
