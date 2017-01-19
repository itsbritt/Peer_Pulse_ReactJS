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
        voteCount: ++this.state.voteCount
      })
    }

  handleDownClick() {
      this.setState({
        voteCount: --this.state.voteCount
      })
    }

    render() {
      // I want to get the topic with id of: this.props.params.id

      return (
        <div id='voteContainer'>
        <p className="voteIcon" onClick={this.upvote} onClick={ this.handleUpClick.bind(this)}>▲</p>
         <h1 className="upVoteText" >{this.state.voteCount}</h1>
         <p className="voteIcon" onClick={ this.handleDownClick.bind(this)}>▼</p>
        </div>
    )
  }
}

export default Votes;
