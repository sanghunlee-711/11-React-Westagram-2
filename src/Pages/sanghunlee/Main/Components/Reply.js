import React, {Components} from 'react';

class Reply extends React.Component{

    render(){
        return(
            this.props.comments.map((comment) => (
                <li key = {comment.id}>
                    <div class="Reply">
                        <div><span>{comment.username}</span><span className="plusFeedComment">{comment.comment}</span></div>
                        <div>
                            <div className="likeDeleteButton">
                                <img alt = "/"src= "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" className="plusCommentLike"/>
                            </div>
                            <button onClick ={() => this.props.onClick(comment.id)} className="commentDeleteButton" type="submit">
                                <img alt = "/"className="plusCommentDeleteBtn" src= "../images/sanghunlee/deletebtn.png"/>
                            </button>
                        </div>
                    </div>
                </li>))
        )
    }
}

export default Reply;