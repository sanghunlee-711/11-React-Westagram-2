import React, { Component } from 'react';
import Feed from './Feed';

class Feeds extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: 3,
            input : '',
            comments: [],
            plusComment: '',
            feedData: []
        }
    }

    componentDidMount = () =>{
        fetch('http://localhost:3000/data/data.json')
        .then(res => res.json())
        .then(res => {
            this.setState({
                    comments: res.comment,
                    feedData: res.Feed
                })
            })
        }

    render() {
        return (
            <div>
                {this.state.feedData.map(({name, headersrc, likenum, postImg, feedComment})=> <Feed name ={name} headersrc ={headersrc} likenum ={likenum} postImg = {postImg} feedComment ={feedComment}/>)}
            </div>
        );
    }
}

export default Feeds;