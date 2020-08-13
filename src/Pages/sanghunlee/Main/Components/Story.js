import React, { Component } from 'react';


class Story extends Component {

    constructor() {
      super()
      this.state  = {
        // imagemock : require('./Mockdata/stroyData.json')
        imagemock : []
      } 
    }
    
    componentDidMount = () =>{
      fetch('http://localhost:3000/data/data.json')
      .then(res => res.json())
      .then(res => {this.setState({imagemock: res.story})})
      console.log(this.state.imagemock)
    }
    
    render() {
      console.log(this.state.imagemock)
        return (
            <div className="Story">
                <ul>
                {this.state.imagemock.map(({src, name, alt}) =>(
              <li>
                <div className="storyBoardCircle">
                  <img 
                    alt={alt}
                    src={src}/>
                </div>
                <span className="exampleId">{name}</span>
              </li>))}
                </ul>
          </div>
            );
    }
}

export default Story;