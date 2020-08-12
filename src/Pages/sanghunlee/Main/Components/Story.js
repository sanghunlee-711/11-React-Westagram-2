import React, { Component } from 'react';


class Story extends Component {

    constructor() {
      super()
      this.state  = {
        imagemock : require('./Mockdata/stroyData.json')
      } 
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