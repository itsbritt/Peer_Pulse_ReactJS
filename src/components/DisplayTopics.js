import React, { Component } from 'react';
import { firebase, firebaseListToArray } from '../utils/firebase';


import Topics from './Topics'

class DisplayTopics extends Component {
  constructor(props){
    super(props)
    this.state={
      topics : []
    }
  }
  componentWillMount(){
    const userid = firebase.auth().currentUser.uid;

    firebase.database()
    .ref('/topics')
    .orderByChild('userid')
    .on('value', data => {
        const results = firebaseListToArray(data.val());
        console.log('topics', results);

        this.setState({
          topics: results
        });
      });
  }

  render() {
    return(
      <Topics />
    );
  }
}

export default DisplayTopics;
