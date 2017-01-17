import React, { Component } from 'react';

import { firebase, firebaseListToArray } from '../utils/firebase';
import Topic from './Topic';

class MyTopics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topics: []
    }
  }

  componentWillMount() {
    firebase.database()
      .ref('/topics')
      .on('value', data => {
        const results = firebaseListToArray(data.val());
        console.log('topics', results);

        this.setState({
          quotes: results
        });
      });
  }

  render() {
    const topics = this.state.topics.map(topic => {
      return <li key={ topic.id } className="topic"><Topic topicObject={ Topic } /></li>;
    });

    return (
      <div>
      <h2>My Topics</h2>
      <ul className="topics">
        { quotes.reverse() }
      </ul>
      </div>




    );
  }
}

export default MyTopics;
