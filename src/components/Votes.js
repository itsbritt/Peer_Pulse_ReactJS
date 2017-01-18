import React, { Component } from 'react';

class Votes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      voteCount: 1
    }
  }

  handleUpClick() {
    this.setState({
      voteCount: this.state.voteCount++
    })
      this.update = this.update.bind(this);
  }


  render(){
    return(
      <div>
        <a onClick={this.handleUpClick}>▲</a>
        <strong>{this.state.voteCount}</strong>
        <a onClick={this.downvote}>▼</a>
      </div>
    )
  }
}

export default Votes;
