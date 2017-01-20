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
    var ideaLocation = firebase.database().ref('/topics/' + firebaseId + '/idea/');


    this.setState({
      votes: ++this.state.votes
    })

    ideaLocation.orderByChild('key').equalTo(ideaId).once('value',(data)=>{
      console.log('data is: ', data.val())

      for(let ideaKey in data.val()){
        firebase.database().ref('/topics/' + firebaseId + '/idea/'+ideaKey).update({
          votes: this.state.votes
        })
      }


    })




console.log('the iddea is', ideaLocation);
      // update in firebase
    }

    handleDownClick() {
      var ideaId = this.props.ideaKey
      var firebaseId = this.props.topicKey
      var ideaLocation = firebase.database().ref('/topics/' + firebaseId + '/idea/');

      this.setState({
        votes: --this.state.votes
      })

      ideaLocation.orderByChild('key').equalTo(ideaId).once('value',(data)=>{
        console.log('data is: ', data.val())

        for(let ideaKey in data.val()){
          firebase.database().ref('/topics/' + firebaseId + '/idea/'+ideaKey).update({
            votes: this.state.votes
          })
        }
      })
}
    render() {
      // I want to get the topic with id of: this.props.params.id

      return (

        <div className='voteContainer'>
        <p className="upVoteIcon" onClick={this.upvote} onClick={ this.handleUpClick.bind(this)}>▲</p>
         <h1 className="upVoteText" >{this.state.votes}</h1>
         <p className="downVoteIcon" onClick={ this.handleDownClick.bind(this)}>▼</p>
        </div>
    )
  }
}

export default Votes;
