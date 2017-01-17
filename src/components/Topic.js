import React, { Component } from 'react';

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

  render() {
    return (
      <div className="col-sm-6 col-md-6 col-lg-12">
        <div className="topic" onClick={ this.handleUpClick.bind(this) }>
      
          <h1 >{this.state.voteCount}</h1>
          { <h4 className="topic-title">{this.props.idea}</h4> }
        </div>
        <hr/>
      </div>
    );
  }
}

export default Topic;













//
// return (
//   <div className="col-sm-6 col-md-6 col-lg-12">
//     <div className="topic" onClick={ this.handleUpClick.bind(this) }>
//       <button onClick={this.handleUpClick.bind(this)}>
//         Up Arrow
//       </button>
//       <h1 >{this.state.voteCount}</h1>
//       { <h4 className="topic-title">{this.props.idea}</h4> }
//     </div>
//     <hr/>
//   </div>
// );
