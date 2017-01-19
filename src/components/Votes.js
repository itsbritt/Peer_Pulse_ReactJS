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
        <div>
        <h3 onClick={this.upvote} onClick={ this.handleUpClick.bind(this)}>▲</h3>
         <h1 className="upVote" >{this.props.voteObject}</h1>
         <h3 onClick={ this.handleDownClick.bind(this)}>▼</h3>
          <div className="topicHeader">

          </div>
        </div>
    )
  }

}

export default Votes;
