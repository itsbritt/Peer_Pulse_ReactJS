import React, { Component } from 'react';
import Idea from './Idea';
import Topic from './Topic';
import Title from './Title';
import Votes from './Votes';
import SimpleMenu from './SimpleMenu';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { firebase, firebaseListToArray } from '../utils/firebase';
import { Col } from 'react-bootstrap';


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
    var voteLocation = '/topics/' + firebaseId + '/idea';
      let self=this;
      var topicsRef = firebase.database().ref(topicLocation)
      .once("value", function(topicData) {


                var topicCollection = topicData.val();

                  self.setState({
                    topics: self.state.topics.concat(topicCollection)
                  });
                  // console.log('state of topics is', self.state.topics);
                // }
          });
        var ideasRef = firebase.database().ref(ideaLocation)
      .once("value", function(data) {


                var ideaCollection = data.val();
// console.log('ideas are', ideaCollection);
                  self.setState({
                    idea: ideaCollection
                  });
                  console.log('ideas are', self.state.idea);
                // }
          });
          // console.log('state of ideas is', self.state.idea);
          var votesRef = firebase.database().ref(voteLocation)
        .once("value", function(voteData) {
                  // const topicData = firebaseListToArray(data.val().userid);
                  console.log("VOTES: ", voteData.val());

                  var voteCollection = voteData.val();

                    self.setState({
                      votes: voteCollection
                    });
                    console.log('state of vote is', self.state.votes);
                  // }
            });
// console.log("the idea is", topicsRef);
      }

  render() {

    const topics = this.state.topics.map(topic => {
      return <Title titleObject={ topic } />
    });
    const idea = this.state.idea.map(ideas => {
      return <Idea ideaObject={ ideas.idea } />
    });
    const votes = this.state.idea.map(ideas => {
      console.log('votes are', ideas);
      return <Votes voteObject={ ideas.votes } />
    });

    return (
      <div>
        <div>
          <MuiThemeProvider>
            <SimpleMenu />
          </MuiThemeProvider>
        </div>

        <h1>{ topics }</h1>

          <div className="voteContainer">
            { votes }
          </div>
          <div className="ideaName">
            { idea }
          </div>
          </div>
    );
  }
}

export default ClickedTopic;
