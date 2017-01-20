import React, { Component } from 'react';
import { firebase } from '../utils/firebase';
import Idea from './Idea';
import Topic from './Topic';


// import NavLink from './NavLink';

class Ideas extends Component {

  constructor(props) {
    super(props);

    this.state = {
      topics: []
    }
  }

  componentDidMount() {
    let self=this;
    var topicsRef = firebase.database().ref("topics/");

      firebase.auth().onAuthStateChanged(function(userData){

        topicsRef.orderByChild("userid").equalTo(userData.uid).once("value", function(data) {
              // const topicData = firebaseListToArray(data.val().userid);

              // console.log("Equal to filter: ", data.val());

              var topicCollection = data.val();

              for(let key in topicCollection){
                topicCollection[key].uniqueKey = key;
                // console.log('key: ',topicCollection[key].uniqueKey);
                self.setState({
                  topics: self.state.topics.concat(topicCollection[key])
                });
// console.log('state is', self.state.topics);

              console.log("Equal to filter: ", data.val());

              var topicCollection = data.val();

              for(let key in topicCollection){
                topicCollection[key].uniqueKey = key;
                console.log('key: ',topicCollection[key].uniqueKey);
                self.setState({
                  topics: self.state.topics.concat(topicCollection[key])
                });

>>>>>>> abaaa71e01baee7ab28a91294737ef0076ff17af
              }
        });
      })
    }


  render() {
    // console.log("this.state.topic.ideas", this.state.topics);
    const topics = this.state.topics.map(topic => {
// console.log('topic is', topic);
      return <Idea keyObject={ this.props.children } ideaObject={ topic } />


    const topics = this.state.topics.map(topic => {
      console.log('hey',topic.title);
      return <Topic key={ topic.uniqueKey } titleObject={ topic } />

    })

    return (
      <section id="topicsDiv" className="container-fluid">

        <div className="row">

        { topics }


        </div>
      </section>
    )
  }

}

export default Ideas;
