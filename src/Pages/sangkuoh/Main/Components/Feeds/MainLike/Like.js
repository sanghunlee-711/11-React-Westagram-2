import React, { Component } from 'react';
import MainHeartLike from './MainHeartLike';
import MainNormalLike from './MainNormalLike';

class Like extends Component {
  constructor(props){
    super(props);
    this.state = {
      like: false
    }
  }

  changeMainLike = () => {
    this.setState({like : !this.state.like});
  }

  render() {
    return (
      <div>
        {this.state.like
          ? <MainHeartLike onClick={this.changeMainLike}/>
          : <MainNormalLike onClick={this.changeMainLike}/>
        }
      </div>
    );
  }
}

export default Like;