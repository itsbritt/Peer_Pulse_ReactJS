import React, { Component } from 'react';
import { Button, Col, Collapse, Well } from 'react-bootstrap';

class Welcome extends Component{
  constructor(...args) {
      super(...args);

      this.state = {};
    }

    render() {
      return (
        <div>
          <Button onClick={ ()=> this.setState({ open: !this.state.open })}>
            Add Idea
          </Button>
          <Collapse in={this.state.open}>
            <div>
              <Well>
                {this.props.children}
              </Well>
            </div>
          </Collapse>
        </div>
    )
  }
}

export default Welcome;
