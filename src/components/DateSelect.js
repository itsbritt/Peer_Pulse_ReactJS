import React, { Component } from 'react';
import { Button, Collapse, Well } from 'react-bootstrap';

class DateSelect extends Component{
  constructor(...args) {
      super(...args);

      this.state = {};
    }

    render() {
      return (
        <div>
          <Button className="dateSelect btn" onClick={ ()=> this.setState({ open: !this.state.open })}>
            Select End Date
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

export default DateSelect;
