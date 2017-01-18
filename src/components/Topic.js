import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebase } from '../utils/firebase';

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
      <div id="topicsDiv" className="col-sm-6 col-md-6 col-lg-12">
          <h4 className="topic-title" onClick={this.handleUpClick.bind(this)}><Link to={"/Ideas/"+ this.props.titleObject.title}>{this.props.titleObject.title}</Link></h4>
      </div>
    );
  }
}

export default Topic;
