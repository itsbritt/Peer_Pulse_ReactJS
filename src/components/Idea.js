import React, { Component } from 'react';
import { Link } from 'react-router';

import Votes from './Votes';
import { Col } from 'react-bootstrap';


class Idea extends Component {



  render() {

    return (

      <div id="topicsDiv">

      <Col xs={9} className="ideaName">
          <h4 className="idea-title-header">{this.props.ideaObject}</h4>
        </Col>



      <div id="topicsDiv" className="col-sm-6 col-md-6 col-lg-12">
          <h4 className="topic-title">{this.props.ideaObject}</h4>
      </div>

      </div>

    );
  }
}

export default Idea;
