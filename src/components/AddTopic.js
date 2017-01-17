import React, { Component } from 'react';

import { firebase } from '../utils/firebase';
import { hashHistory } from 'react-router';

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
      .ref('/topic')
      .push({
        title: topicTitle,
        description: description,
        idea: idea,
        date: Math.floor(Date.now() / 1000)
      }).then(data => {
        console.log('Saved the Topic');
        this.refs.topicTitle.value = '';
        this.refs.desciption.value = '';

        hashHistory.push('/');
      });
  }

    render() {
      return (
        <div>
          <form onSubmit={ this.handleSubmit.bind(this) }>
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
