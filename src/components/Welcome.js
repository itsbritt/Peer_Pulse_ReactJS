import React, { Component } from 'react';
import { CardStack, Card } from 'react-cardstack';
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
                <form>
                <input
                  className="form-control"
                  type="text"
                  ref="idea"
                  placeholder="Idea" />
                </form>
              </Well>
            </div>
          </Collapse>
        </div>
    )
  }
}

export default Welcome;
