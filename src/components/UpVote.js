import React, { Component } from 'react';

import { firebase } from '../utils/firebase';
import { hashHistory } from 'react-router';

class Upvote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      props: ['post']
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    // let newArr;
    const topicsRef = firebase.database().ref("topics/");
    const topicTitle = this.refs.topicTitle.value;
    // const description = this.refs.description.value;
    const idea = [this.refs.idea.value];
    const userid = firebase.auth().currentUser.uid

    const ideaNew = this.refs.ideaAdd.value;

    // if (newArr) {
    //   newArr = newArr.concat(ideaNew)
    // } else {
    //   newArr = idea.concat(ideaNew)
    // }

    let newArr = idea.concat(ideaNew)

    topicsRef.orderByChild("title").equalTo(topicTitle).once("value",(data)=>{
      for (let theKey in data.val()) {
        console.log('key is: ', theKey);
        topicsRef.child(theKey).update({ "idea": newArr })
      }
    });

    firebase.database()
      .ref('/topics')
      .push({
        title: topicTitle,
        // description: description,
        idea: idea,
        upvoted: false,
        downvoted: false
      }).then(data => {
        // redirects you back to home
        hashHistory.push('/home');
      });
  }

  upvote(){
    this.upvoted = !this.upvoted;
    this.downvoted = false;
  }
  downvote(){
    this.downvoted = !this.downvoted;
    this.downvoted = false;
  }

  var countVotes = function(votes){
    if (this.upvoted){
      return this.topics.votes + 1;
    } else if (this.downvoted) {
      return this.post.votes -1;
    } else {
      return this.post.votes
    }
    }
    })
  }
    render() {
      return (
        <div>
        </div>
      );
    }
  }

  export default UpVote;
