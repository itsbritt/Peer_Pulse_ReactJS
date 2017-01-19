import React, { Component } from 'react';

import { firebase } from '../utils/firebase';
import { hashHistory } from 'react-router';
import SimpleMenu from './SimpleMenu';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Welcome from './Welcome';
class AddTopic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topic: {}
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const topicsRef = firebase.database().ref("topics/");
    const topicTitle = this.refs.topicTitle.value;
    const userid = firebase.auth().currentUser.uid

    const idea1 = this.refs.idea1.value;
    const idea2 = this.refs.idea2.value;
    const idea3 = this.refs.idea3.value;
    const idea4 = this.refs.idea4.value;
    const idea5 = this.refs.idea5.value;

    const newArr = [idea1, idea2, idea3, idea4, idea5]
    const validEntry = [];

    for (var i=0; i<newArr.length; i++) {
      if (newArr[i].length >= 1 && newArr[i] !== '') {
        validEntry.push(newArr[i])
      }
    }

    topicsRef.orderByChild("title").equalTo(topicTitle).once("value",(data)=>{
      for (let theKey in data.val()) {
        console.log('key is: ', theKey);
        topicsRef.child(theKey).update({ "idea": validEntry })
      }
    });

    firebase.database()
      .ref('/topics')
      .push({
        title: topicTitle,
        // description: description,
        idea: newArr,
        date: Math.floor(Date.now() / 1000),
        userid: userid
      }).then(data => {
        // redirects you back to home
        hashHistory.push('/home');
      });
  }

    render() {
      return (
        <div className="background">
          <MuiThemeProvider>
            <SimpleMenu />
          </MuiThemeProvider>

          <p className="add-topic-info">What's the plan?</p>
          <form>
            <input
              className="form-control"
              type="text"
              ref="topicTitle"
              placeholder="Add an Activity &raquo; ex: Where to eat?" />
          </form>

            <p className="add-topic-info">Add some suggestions:</p>
              <form>
            <input
              className="form-control"
              type="text"
              ref="idea1"
              placeholder="Add a suggestion" />
            </form>

          <form>
            <input
              className="form-control"
              type="text"
              ref="idea2"
              placeholder="... " />
            </form>

          <form>
            <input
              className="form-control"
              type="text"
              ref="idea3"
              placeholder="..." />
            </form>

          <form>
            <input
              className="form-control"
              type="text"
              ref="idea4"
              placeholder="..." />
            </form>

          <form>
            <input
              className="form-control"
              type="text"
              ref="idea5"
              placeholder="..." />
            </form>

            <form onSubmit={ this.handleSubmit.bind(this) }>
            <input
              className="save btn btn-primary"
              type="submit"
              value="Save" />
          </form>

        </div>
      );
    }
  }

  export default AddTopic;
