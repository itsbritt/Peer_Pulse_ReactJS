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
        var firebaseId = this.props.params.id;
  }

  componentDidMount(){
    var firebaseId = this.props.params.id;
    // console.log('KEY:', firebaseId);
    var ideaLocation = '/topics/' + firebaseId + '/idea';
    var topicLocation = '/topics/' + firebaseId;
    var voteLocation = '/topics/' + firebaseId + '/idea';
    var dateLocation = '/topics/' + firebaseId + '/time';
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
                  // console.log('ideas are', self.state.idea);
                // }
          });
          // console.log('state of ideas is', self.state.idea);
          var votesRef = firebase.database().ref(voteLocation)
        .once("value", function(voteData) {
                  // const topicData = firebaseListToArray(data.val().userid);
                  // console.log("VOTES: ", voteData.val());

                  var voteCollection = voteData.val();

                    self.setState({
                      votes: voteCollection
                    });
                    // console.log('state of vote is', self.state.votes);
                  // }
            });
// console.log("the idea is", topicsRef);
          var timeRef = firebase.database().ref(dateLocation)
          .once("value", function(timedata) {


                  var timeCollection = timedata.val();
          // console.log('ideas are', ideaCollection);
                    self.setState({
                      time: timeCollection

                    });
                    // console.log('ideas are', self.state.idea);
                  // }
            });
      }

  render() {
console.log('time!', this.state.time);
console.log('now:', Math.floor(Date.now() / 1000));
const loggedTime = this.state.time;
const currentTime = Math.floor(Date.now() / 1000);
console.log('BINGO:', Math.round((Math.floor(Date.now() / 1000) - this.state.time) / 86400));
    const topics = this.state.topics.map(topic => {
      return <Title titleObject={ topic } />
    });
    const idea = this.state.idea.map(ideas => {
      return <Idea ideaObject={ ideas.idea } />
    });
    const votes = this.state.idea.map(ideas => {
      // console.log('votes are', ideas);
      return <Votes ideaKey={ideas.key} topicKey={ this.props.params.id } voteObject={ ideas.votes } />

    });



    return (
      <div>
        <div>
          <MuiThemeProvider>
            <SimpleMenu />
          </MuiThemeProvider>
        </div>
        <Col xs={1}/>
        <Col xs={10} className="centeredContainer">
        <h1>{ topics }</h1>
        <h2 className="deadline">Days Left to Vote: {Math.round((Math.floor(Date.now() / 1000) - this.state.time) / 86400) * -1}</h2>

        <div className="col-xs-12 ideasContainer">

          <div className="voteContainer">
            { votes }
          </div>
          <div className="ideaName">
            { idea }
          </div>



        </div>
      </Col>
        <Col xs={1}/>
        </div>
    );
  }
}

export default ClickedTopic;
