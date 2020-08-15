import React, { Component } from 'react';

class Story extends Component {

    constructor() {
      super()
      this.state  = {
        imagemock : []
      } 
    }
    
    componentDidMount = () =>{
      fetch('http://localhost:3000/data/data.json')
      .then(res => res.json())
      .then(res => {this.setState({imagemock: res.story})})
    }
    
    render() {
        return (
            <div className="Story">
                <ul>
                    {this.state.imagemock.map(({src, name, alt}) =>(
                  <li>
                    <div className="storyBoardCircle">
                      <img 
                        alt={alt}
                        src={src}
                      />
                    </div>
                    <span className="exampleId">{name}</span>
                  </li>))}
                </ul>
          </div>
            );
    }
}

export default Story;