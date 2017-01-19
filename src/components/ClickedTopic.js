import React, { Component } from 'react';
import Ideas from './Ideas';
import { firebase, firebaseListToArray} from '../utils/firebase';
import Idea from './Idea';
import Title from './Title';

class ClickedTopic extends Component {
  constructor(props){
    super(props)
    this.state={
      idea : [],
      title: []
    }
  }


  componentDidMount(){
    var firebaseId = this.props.params.id;
    // console.log('KEY:', firebaseId);
    var location = '/topics/' + firebaseId + '/idea';
      let self=this;
      var topicsRef = firebase.database().ref(location)

      .once("value", function(data) {
                // const topicData = firebaseListToArray(data.val().userid);
                console.log("IDEAS: ", data.val());

                var ideaCollection = data.val();
                const results = firebaseListToArray(ideaCollection);
                console.log('RESULTS',results);


                  self.setState({
                    idea: self.state.idea.concat(ideaCollection)
                  });
                  console.log('setting state to:', self.state.idea);


          });
          var topiclocation = '/topics/' + firebaseId;

            var titleRef = firebase.database().ref(location)

            .once("value", function(data) {
                      // const topicData = firebaseListToArray(data.val().userid);
                      console.log('TITLE', data.val());

                      var titleCollection = data.val();
                      const titleresults = firebaseListToArray(titleCollection);
                      console.log('RESULTS',titleresults);


                        this.setState({
                          title: this.state.idea.concat(titleCollection).bind(this)
                        });
                        console.log('setting heading state to:', this.state.title);


                });

      }





  render() {

    const idea = this.state.idea.map(ideas => {
      return <Idea ideaObject={ ideas } />
    })
    const title = this.state.title.map(titles => {
      return <Title titleObject={ titles } />

      })
    return (
      <div className="ClickedTopic">
        <div className="topicHeader">
        {title}
        </div>
        {idea}
      </div>
    );

}
}

export default ClickedTopic;
