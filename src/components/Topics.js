import React, { Component } from 'react';

import Topic from './Topic';
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

  // handleRedirect() {
  //   window.location = '/#/ideas';
  // }
  // <button onClick={this.handleRedirect.bind(this)}>Edit</button>


  // I need to pass in a prop that houses the ideas ideas={topic.idea}
  

  render() {
    const topics = this.state.topics.map(topic => {
      return <Topic key={ topic.id} title={ topic.title } />
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
