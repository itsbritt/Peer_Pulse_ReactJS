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

  componentDidMount() {
    let self=this;
    var topicsRef = firebase.database().ref("topics/");

      firebase.auth().onAuthStateChanged(function(userData){

        topicsRef.orderByChild("userid").equalTo(userData.uid).once("value", function(data) {
              // const topicData = firebaseListToArray(data.val().userid);
              console.log("Equal to filter: ", data.val());

              var topicCollection = data.val();

              for(let key in topicCollection){
                topicCollection[key].uniqueKey = key;
                console.log('key: ',topicCollection[key].uniqueKey);
                self.setState({
                  topics: self.state.topics.concat(topicCollection[key])
                });
              }
        });
      })
    }

  // handleRedirect() {
  //   window.location = '/#/ideas';
  // }
  // <button onClick={this.handleRedirect.bind(this)}>Edit</button>


  // I need to pass in a prop that houses the ideas ideas={topic.idea}


  render() {
    const topics = this.state.topics.map(topic => {
      return <Topic key={ topic.uniqueKey } titleObject={ topic } />
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
