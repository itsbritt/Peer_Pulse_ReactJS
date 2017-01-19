import React, { Component } from 'react';


class Votes extends Component {

  constructor(props) {
      super(props);

      this.state = {
        voteCount: 0
      }
    }


  handleUpClick() {
      this.setState({
        voteCount: ++this.state.voteCount
      })

      // update in firebase
    }

  handleDownClick() {
      this.setState({
        voteCount: --this.state.voteCount
      })
    }

    render() {
      // I want to get the topic with id of: this.props.params.id

      return (

        <div className='voteContainer'>
        <p className="voteIcon" onClick={this.upvote} onClick={ this.handleUpClick.bind(this)}>▲</p>
         <h1 className="upVoteText" >{this.props.voteObject}</h1>
         <p className="voteIcon" onClick={ this.handleDownClick.bind(this)}>▼</p>
        </div>
    )
  }
}

export default Votes;
