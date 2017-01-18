import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebase } from '../utils/firebase';


class Topic extends Component {

  constructor(props) {
    super(props);

    this.state = {
      voteCount: 1
    }
  }

  handleUpClick() {
    this.setState({
      voteCount: this.state.voteCount++
    })
  }


  componentDidMount() {
    let self=this;
    var topicsRef = firebase.database().ref("topics/");

      firebase.auth().onAuthStateChanged(function(userData){

        topicsRef.orderByChild("userid").equalTo(userData.uid).once("value", function(data) {
              // const topicData = firebaseListToArray(data.val().userid);
              console.log("Equal to filter: ", data.val());

              var topicCollection = data.val();

              for(let key in topicCollection){
                topicCollection[key].uniqueKey = key;
                console.log('key: ',topicCollection[key].uniqueKey);
                self.setState({
                  topics: self.state.topics.concat(topicCollection[key])
                });
              }
        });
      })
    }


  render() {
    const topicsRef = firebase.database().ref("topics/");
    const bingo = topicsRef.data;
    console.log('Data', topicsRef.data.key);

    return (
      <div id="topicsDiv" className="col-sm-6 col-md-6 col-lg-12">
      <Link to={"/Ideas" + bingo}>
        <div className="topic" onClick={ this.handleUpClick.bind(this) }>

          { <h4 className="topic-title">{this.props.titleObject.title}</h4> }

        </div>
        <hr/>
        </Link>
      </div>
    );
  }
}

export default Topic;
