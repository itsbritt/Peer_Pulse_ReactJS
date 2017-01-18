import React, { Component } from 'react';
import { firebase, firebaseListToArray } from '../utils/firebase';

class UserPhoto extends Component {
  constructor(props){
    super(props);

    this.state={
      imgurl: ''
    }
  }

  componentDidMount() {
    var topicsRef = firebase.database().ref("topics/");

      firebase.auth().onAuthStateChanged((userData)=>{
        
              console.log('user image', userData.photoURL);
              this.setState({
                imgurl: userData.photoURL
              })

      })
      console.log('state is: ', this.state.imgurl)
    }


  render(){
    return(
      <div>
        <img src={ this.state.imgurl }/>
      </div>
    )
  }
}

export default UserPhoto;
