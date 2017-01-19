import React, { Component } from 'react';
import { Link } from 'react-router';

class Title extends Component {



  render() {

    return (
      <div id="topicsDiv" className="col-sm-6 col-md-6 col-lg-12">
          <h4 className="topic-title-header">{this.props.titleObject.title}</h4>
      </div>
    );
  }
}

export default Title;
