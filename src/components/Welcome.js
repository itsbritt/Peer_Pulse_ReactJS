import React, { Component } from 'react';
import { Button, Collapse, Well } from 'react-bootstrap';

class Welcome extends Component{
  constructor(...args) {
      super(...args);

      this.state = {};
    }

    render() {
      return (
        <div>
          <Button className="addMore btn" onClick={ ()=> this.setState({ open: !this.state.open })}>
            Add More Suggestions
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
