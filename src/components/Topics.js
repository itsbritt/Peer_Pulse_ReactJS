import React, { Component } from 'react';

import Topic from './Topic'
import { firebase, firebaseListToArray } from '../utils/firebase';

class Topics extends Component {

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

  render() {
    const topics = this.state.topics.map(topic => {
      return <Topic key={ topic.id} idea={ topic.title } />;
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

export default Topics
