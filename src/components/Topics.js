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
              console.log('user image', userData.photoURL);
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



  render() {
    const topics = this.state.topics.map(topic => {
      return <Topic keyObject={ topic.uniqueKey } titleObject={ topic } />
    })

    return (
      <section id="topicsDiv" className="container-fluid">

        <div className="row">

        { topics }


        </div>
      </section>
    )
  }

}

export default Topics
