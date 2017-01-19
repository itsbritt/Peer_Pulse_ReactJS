import React, { Component } from 'react';
import { firebase } from '../utils/firebase';

class Votes extends Component {

  constructor(props) {
      super(props);

      this.state = {
        votes: this.props.voteObject
      }
    }

  handleUpClick() {
    var ideaId = this.props.ideaKey
    var firebaseId = this.props.topicKey
    var voteLocation = '/topics/' + firebaseId + '/idea/'+ideaId;
    this.setState({
      votes: ++this.state.votes
    })

    firebase.database()
      .ref(voteLocation)
      .update({
        votes: this.state.votes,
      })

console.log('the iddea is', voteLocation);
      // update in firebase
    }

  handleDownClick() {
      this.setState({
        votes: --this.state.votes
      })
    }

    render() {
      // I want to get the topic with id of: this.props.params.id

      return (

        <div className='voteContainer'>
        <p className="upVoteIcon" onClick={this.upvote} onClick={ this.handleUpClick.bind(this)}>▲</p>
         <h1 className="upVoteText" >{this.props.voteObject}</h1>
         <p className="downVoteIcon" onClick={ this.handleDownClick.bind(this)}>▼</p>
        </div>
    )
  }
}

export default Votes;
