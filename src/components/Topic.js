import React, { Component } from 'react';
import { Link } from 'react-router';

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
      <Link to="/Ideas">
        <div className="topic" onClick={ this.handleUpClick.bind(this) }>

          { <h4 className="topic-title">{this.props.titleObject.title}</h4> }

        </div>
        <hr/>
        </Link>
      </div>
    );
  }
}

export default Topic;
