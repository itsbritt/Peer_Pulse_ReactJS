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
        <div>
        <h3 onClick={this.upvote} onClick={ this.handleUpClick.bind(this)}>▲</h3>
         <h1 className="upVote" >{this.state.votes}</h1>
         <h3 onClick={ this.handleDownClick.bind(this)}>▼</h3>
          <div className="topicHeader">

          </div>
        </div>
    )
  }

}

export default Votes;
