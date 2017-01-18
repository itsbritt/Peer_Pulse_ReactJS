import React, { Component } from 'react';

class Votes extends Component {
  constructor(props){
    super(props);

    this.state={
                  "id": 0,
                  "votes": 0
                }
  }
  getInitialState() {
  return { votes: this.props.votes };
}
_upvote() {
  var newVotes = this.state.votes + 1;

  this.setState({
    votes: newVotes
  });
}
_downvote() {
  var newVotes = this.state.votes - 1;

  this.setState({
    votes: newVotes
  });
}
  render(){
    return(
      <div>
        <a onClick={this.upvote}>▲</a>
        <strong>{this.state.votes}</strong>
        <a onClick={this.downvote}>▼</a>
      </div>
    )
  }
}

export default Votes;
