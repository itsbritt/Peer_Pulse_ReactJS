import React, { Component } from 'react';

class Topic extends Component {

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
  }

  render() {
    return (
      <div className="col-sm-6 col-md-6 col-lg-12">
        <div className="topic" onClick={ this.handleUpClick.bind(this) }>


          { <h4 className="topic-title">{this.props.title}</h4> }
        </div>
        <hr/>
      </div>
    );
  }
}

export default Topic;
