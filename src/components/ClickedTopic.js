import React, { Component } from 'react';
import Idea from './Idea';
import Topic from './Topic';
import Title from './Title';
import SimpleMenu from './SimpleMenu';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { firebase, firebaseListToArray } from '../utils/firebase';


class ClickedTopic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topics: [],
      idea: []
    }
  }
  componentDidMount(){
    var firebaseId = this.props.params.id;
    // console.log('KEY:', firebaseId);
    var ideaLocation = '/topics/' + firebaseId + '/idea';
    var topicLocation = '/topics/' + firebaseId;
      let self=this;
      var topicsRef = firebase.database().ref(topicLocation)
      .once("value", function(topicData) {
                // const topicData = firebaseListToArray(data.val().userid);
                console.log("TITLE: ", topicData.val());

                var topicCollection = topicData.val();
                // const results = firebaseListToArray(data.val());
                // console.log("results are", results);

                // for(let key in topicCollection){
                //   topicCollection[key].uniqueKey = key;
                //   console.log('key: ',topicCollection[key].uniqueKey);
                  self.setState({
                    topics: self.state.topics.concat(topicCollection)
                  });
                  console.log('state of topics is', self.state.topics);
                // }
          });
        var ideasRef = firebase.database().ref(ideaLocation)
      .once("value", function(data) {
                // const topicData = firebaseListToArray(data.val().userid);
                console.log("IDEAS: ", data.val());

                var ideaCollection = data.val();
                // const results = firebaseListToArray(data.val());
                // console.log("results are", results);

                // for(let key in topicCollection){
                //   topicCollection[key].uniqueKey = key;
                //   console.log('key: ',topicCollection[key].uniqueKey);
                  self.setState({
                    idea: self.state.idea.concat(ideaCollection)
                  });
                  console.log('state of ideas is', self.state.idea);
                // }
          });
// console.log("the idea is", topicsRef);
      }

  render() {

    const topics = this.state.topics.map(topic => {
      return <Title titleObject={ topic } />
    });
    const idea = this.state.idea.map(ideas => {
      return <Idea ideaObject={ ideas } />
    });

    return (
      <div>
<div>
  <MuiThemeProvider>
    <SimpleMenu />
  </MuiThemeProvider>
</div>
<h1>{ topics }</h1>
          <div>

  { idea }
        </div>
      </div>
    );
  }
}

export default ClickedTopic;
