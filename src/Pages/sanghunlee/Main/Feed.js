import React, { Component } from 'react';
import Reply from'./Reply';

let mockdata = [{id:1 , username: 'Gareth', comment:'Hello'}, {id:2 , username: 'Lio', comment:'Ohla'}]

class Feed extends Component {
    constructor(props){
      super(props)
      this.state = {
        id: 3,
        input : '',
        comments: mockdata,
        plusComment: '',
      }
    }

    inputText =(e)=>{
      this.setState({input : e.target.value}, ()=> { 
        console.log(this.state.input)
      })
    }
    

    addComment = (e) => {
      this.setState({id: this.state.id+1})
      this.setState({input:''})
      this.setState({comments: this.state.comments.concat({id: this.state.id, username:'Sanghun', comment: this.state.input}) })
      console.log(this.state.comments)
    }

    enterKey = (e)=>{
      if(e.key === "Enter"){
        e.preventDefault()
        this.addComment(e)
      }
    }
    deleteComment = (id)=>{
      console.log(id)
      this.setState({comments: this.state.comments.filter(comment => comment.id !== id) });
      console.log("??@?@?@?@?@?")
    }
    
    render() {
        return (
                <section className="feed">
                  <header>
                    <div className="feedHeaderName">
                      <img alt="Posting Name"
                        src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/97136862_702839713802578_7837045271895736320_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=RKEStn8EIRIAX_DAFmT&oh=efad139222216e0b4d279e78bbfa753e&oe=5F4A15B9"/>
                      <p>garethbale11</p>
                    </div>
                    <div className="feedHeaderbutton">
                      <div className="circle"></div>
                      <div className="circle"></div>
                      <div className="circle"></div>
                    </div>
                  </header>
                  <div className="feedContentImg">
                    <img alt="Posting Picture" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/109471108_2739580409619744_6586617576396670755_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=DV5jqtiVlmUAX-fhVlc&oh=e250ac900db6a8d80db62c538c0c6ea6&oe=5F4C0287"/>
                  </div>
                  <section className="feedButtons">
                    <div className="feedButtonsWrapper">
                      <span className="feedButton">
                        <svg className="heartimg" aria-label="Like" className="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48"
                          width="24">
                          <path
                            d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z">
                          </path>
                        </svg>
                      </span>
                      <span className="feedButton">
                        <img alt="CommentButton"
                          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"/>
                      </span>
                      <span className="feedButton">
                        <img alt="ShareButton" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png"/>
                      </span>
                    </div>
                    <span className="feedButton">
                      <img alt="SaveButton" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"/>
                    </span>
                  </section>
                  <div className="feedBottomWrapper">
                    <div className="feedBottom">
                      <div className="feedBottomlikeNumber">
                        <img alt="SomeoneClicklike" src="../images/sanghunlee/wecode.jpeg"/>
                        <span className="likeNumber">121</span><span>likes</span>
                      </div>
                      <ul className="plusCommentWrapper">
                        <div className="feedComment" id="addComment">
                          <div>
                            <span>
                              garethbale11
                            </span>
                            <span className= "feedAddedComment">
                              🏆 Champions!
                            </span>
                          </div>
                        </div>
                          <Reply 
                            comments={this.state.comments} 
                            onClick={(id)=>{
                              this.deleteComment(id);
                              }}></Reply>
                      </ul>
                      <div className="feedPostingTime">
                        77 Minute
                      </div>
                    </div>
                    <section className="feedCommentInput">
                    <textarea  
                    onKeyPress = {this.enterKey} 
                    value ={this.state.input} 
                    onChange = {this.inputText} 
                    className="commentInputTextarea" 
                    type="text" 
                    placeholder="Add a comment...">
                    </textarea>
                      <button onClick = {() => this.addComment()} type="submit" className="commentSubmitButton">
                        Post
                      </button>
                    </section>
                  </div>
                </section>
        );
    }
}

export default Feed;