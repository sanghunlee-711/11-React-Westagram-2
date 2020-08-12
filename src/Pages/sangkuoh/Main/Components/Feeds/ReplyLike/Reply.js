import React, { Component } from 'react';
import NormalLike from './NormalLike';
import HeartLike from './HeartLike';


class Reply extends Component {
  constructor(props){
    super(props);
    this.state = {
      like: false,
    }
  }

  changeLike = () => {
    this.setState({like : !this.state.like});
  }

  render() {
      return (
        <div className="userReplyContainer">
            <button className = "userId">{this.props.userId}</button>
            <span className = "userReply">{this.props.newReply}</span>
            {this.state.like ? <HeartLike onClick={this.changeLike}/> : <NormalLike onClick={this.changeLike}/>}  
        </div>
      );
  }
}

export default Reply;
