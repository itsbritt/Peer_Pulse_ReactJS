import React, { Component } from 'react';

import Topic from './Topic';
import { firebase, firebaseListToArray } from '../utils/firebase';

import { Link } from 'react-router';


class Ideas extends Component {

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
      const topicData = firebaseListToArray(data.val());
      console.log('topic data: ', topicData);

      this.setState({
        topics: topicData
      })
    });
  }

  handleUpClick() {
    this.setState({
      voteCount: this.state.voteCount++
    })
  }

  render() {
    const topics = this.state.topics.map(topic => {
      return (

          <Topic key={ topic.id} title={ topic.idea[0] } />
      );
    })

    return (
      <section id="topics" className="container-fluid">
        <div className="row">
          { topics }
        </div>
      </section>
    )
  }
}

export default Ideas;
