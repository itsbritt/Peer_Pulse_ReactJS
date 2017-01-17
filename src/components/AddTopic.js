import React, { Component } from 'react';

import { firebase } from '../utils/firebase';
import { hashHistory } from 'react-router';
import { Button, Col } from 'react-bootstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SimpleMenu from './SimpleMenu';


class AddTopic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topic: {}
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const topicTitle = this.refs.topicTitle.value;
    const description = this.refs.description.value;
    const idea = this.refs.idea.value;

    firebase.database()
      .ref('/topics')
      .push({
        title: topicTitle,
        description: description,
        idea: idea,
        date: Math.floor(Date.now() / 1000)
      }).then(data => {
        // redirects you back to home
        hashHistory.push('/');
      });
  }

    render() {
      return (
        <div>
          <MuiThemeProvider>
          <SimpleMenu/>
        </MuiThemeProvider>
          <form>
            <input
              className="form-control"
              type="text"
              ref="topicTitle"
              placeholder="Topic Title" />
            <input
              className="form-control"
              type="text"
              ref="description"
              placeholder="Description" />
            <input
              className="form-control"
              type="text"
              ref="idea"
              placeholder="Idea" />
            </form>
            <Button>
              <h3>Add another idea</h3>
            </Button>
            <form onSubmit={ this.handleSubmit.bind(this) }>
            <input
              className="btn btn-primary"
              type="submit"
              value="Save" />
          </form>
        </div>
      );
    }
  }

  export default AddTopic;
