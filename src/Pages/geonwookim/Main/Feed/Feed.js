import React from 'react';
import './Feed.scss';
import { Link } from 'react-router-dom';

class Feed extends React.Component{
  constructor(props){
    super(props);
      this.state={
        inputText : "",
        commentsData: props.data.userComments,
        id : 'wecode',
        likeHeart: true,
        likeCount: 1,
      };
    }

    textChange = (e) =>{
      this.setState({inputText: e.target.value})
    }

    add = () =>{
      let texts = this.state.commentsData;
      texts.push({userid:'Geon-Woo ', comment: this.state.inputText})

      this.setState({commentsData: texts, inputText : "", })
    }

    handleKeyPress=(e)=>{
      if(e.key === 'Enter'){
        this.add();
      }
    }

    likeHeart = () =>{
      this.setState({likeHeart: !this.state.likeHeart})
    }

render(){
    return(
        <section className="feed">
        <header  className="feed_header">
        <div className="feed_header_container">  
            <div className="feed_header_gui_container">
          <img alt="헤더 프로필사진" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/13525473_239562676427287_1092224874_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=Qy5rhi5iYmAAX_RMvd6&oh=6674f7d3c74cdb978e728934a5b1202f&oe=5F48724F"/>
            <div className="feed_header_id_text">{this.props.data.name}</div>
          </div>
          <div className="feed_see_more_details_container">
            <button className="see_more_deatils_btn">
          <img alt="게시글 상단 더보기 아이콘" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"/>    
            </button>
          </div>
        </div>
        </header>
        <div className="feed_img">
        <img className="feed_img" alt="게시글 메인 사진" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/106698725_693473954837193_1494471072476359430_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=uj9msUn1aVsAX9bxBoC&oh=f0148e8fcbc5bf32328868dc329d7097&oe=5F4CD33F"/>
        </div>
        <div className="like_share_comment_container">
        <section className="like_share_Section">
          <div className="like_share_icon">
            <button><img alt="좋아요 버튼" onClick={this.likeHeart}  src={this.state.likeHeart === true ? "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" :'images/geonwookim/redHeart.png' }/></button>
            <button><img alt="메세지 버튼" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"/></button>
            <button><img alt="공유 버튼" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png"/></button> 
          </div>
          <span className="like_share_blank_space"></span>
          <button className="book_mark"><img alt="북마크 아이콘"  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"/></button>
      </section>
      <section className="like_count">
        <button className="like_count_btn">좋아요 <span>{this.state.likeHeart === true ? this.state.likeCount : this.state.likeCount + 1}</span>개</button>
      </section>
      <div className="comment_section">
     <div className="comment_section_my_text"><Link to="#">{this.props.data.mainComments[0].userid} </Link><span>{this.props.data.mainComments[0].comment}<span>...</span></span><span><button>더보기</button></span></div>
        <ul className="comment_section_user_text">
          {this.props.data.userComments.map((v,idx) =>{
          return <li key={idx}> <b>{v.userid}</b> {v.comment}</li>
          })}
        </ul>
      </div>
      <div className="upload_time">
        <span>20시간</span> 전
      </div>
      <section className="input_comment_section">
        <div className="input_comment_section_container">
          <textarea className="input_area" onChange={this.textChange} onKeyPress={this.handleKeyPress} value={this.state.inputText}  placeholder="댓글 달기.."></textarea>
          <button className="upload_btn" onClick={this.add}>게시</button>
        </div>
      </section>
      </div>
      </section>
    );
  }
}
export default Feed;