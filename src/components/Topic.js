import React, { Component } from 'react';


// <div className="col-sm-6 col-md-6 col-lg-12">
//   <div className="topic" onClick={ this.handleClick.bind(this) }>
//     {
//       this.state.visible ?
//         <h4 className="topic-title">{this.props.idea}</h4> :
//         ''
//     }
//     <hr/>
//     <h6>Your Idea should be above here</h6>
//   </div>
// </div>

class Topic extends Component {

  constructor(props) {
    super(props);

// WE WE WANT A COUNTER HERE FOR STATE
    this.state = {
      visible: true,
      voteCount: 1
    }
  }

  handleClick() {
    // this.setState({
    //   visible: !this.state.visible
    // })

    this.setState({
      voteCount: this.state.voteCount++
    })
  }



  render() {
    return (
          <div className="col-sm-6 col-md-6 col-lg-12">
            <div className="topic" onClick={ this.handleClick.bind(this) }>

                <h1 className="upVote">{this.state.voteCount}</h1>
                {
              <h4 className="topic-title">{this.props.idea}</h4>
            }
              <hr/>
              <h6>Your Idea should be above here</h6>
            </div>
          </div>
    )
  }

}

export default Topic
