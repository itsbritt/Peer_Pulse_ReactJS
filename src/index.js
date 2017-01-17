// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );



import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import dotenv from 'dotenv';

dotenv.config({silent: true});

import App from './App';
import DisplayTopics from './components/DisplayTopics';
import AddTopic from './components/AddTopic';
import './index.css';

ReactDOM.render(
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ DisplayTopics } />
      <Route path="/add" component={ AddTopic }/>
    </Route>
  </Router>,
  document.getElementById('root')
);
