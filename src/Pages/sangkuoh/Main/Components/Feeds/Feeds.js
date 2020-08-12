import { withRouter,Link } from 'react-router-dom';
import React, { Component } from 'react';
import Reply from '../Feeds/ReplyLike/Reply';
import Like from '../Feeds/MainLike/Like';
import "./Feeds.scss";


class Feeds extends Component {
    constructor(props){
        super(props);
        this.state = {
            userId: '539',
            newReply: "",
            replies: [],
        }
    }

    textChange = e => {
        this.setState({
            newReply: e.target.value
        })
    }

    pressEnter = e => {
        if(e.key === "Enter" && this.state.newReply) {
            this.addReply();
        }
    }

    addReply = () => {
        this.setState({        
            replies: this.state.replies.concat(this.state.newReply),
            newReply: "",
        });
    }

    render() {
        return (
            <main className="Feeds">
                <div className="mainContainer">
                    <div className="feeds">
                        <div className="feedsContent">
                            <div className="feedsContentLive"></div>
                        </div>
                        <article>
                            <div className="contentMainContainer">
                                <div className="contentMainHeader">
                                    <div className="mainHeaderIcon">
                                        <a href="https://www.instagram.com/539_ku/" className="userPage">
                                            <div className="userIcon">
                                                <img alt="메인페이지 프로필 사진" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/13768284_1670405186613346_1275285357_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=E_gctfZc58MAX93sp83&oh=45433d23d4cbd9b26c6b1fd73a584686&oe=5F49206E" />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="mainHeaderRight">
                                        <div className="mainHeaderId">539_ku</div>
                                        <div className="mainHeaderOption">
                                            <button className="mainHeaderBtn">
                                                <svg aria-label="옵션 더 보기" fill="#262626" height="16" viewBox="0 0 48 48" width="16"><circle cx="8" cy="24" fillRule="evenodd" r="4.5"></circle><circle cx="24" cy="24" fillRule="evenodd" r="4.5"></circle><circle cx="40" cy="24" fillRule="evenodd" r="4.5"></circle></svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="contentMainImg"></div>
                                <div className="contentMainText">
                                    <div className="mainTextIcon">
                                        <span className="mainIcon">
                                            <Like></Like>
                                        </span>
                                        <span className="mainIcon">
                                            <button className="comment" type="button">
                                                <svg aria-label="댓글 달기" fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fillRule="evenodd"></path></svg>
                                            </button>
                                        </span>
                                        <span className="mainIcon">
                                            <button className="msg" type="button">
                                                <svg aria-label="게시물 공유" fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>
                                            </button>
                                        </span>
                                        <span className="mainIcon">
                                            <span className="mainIconRight">
                                                <button className="share" type="button">
                                                    <svg aria-label="저장" fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg>
                                                </button>
                                            </span>
                                        </span>
                                    </div>

                                    <div className="mainTextView">조회 20회</div>
                                    <div className="mainTextContainer">
                                        <div className="mainTextContainerWrap">
                                            <div className="mainTextUserComment">
                                                <a href="https://www.instagram.com/539_ku/?hl=ko" className="userCommentId">539_ku</a>
                                                <div className="userCommentText">
                                                    <div>Aimyon</div>
                                                    <div>Momentary Sixth Sense</div>
                                                    <div>Marygold</div>
                                                    <div>What if..</div>
                                                    <div>
                                                        <a href="https://www.instagram.com/explore/tags/あいみょん/">#あいみょん</a>
                                                    </div>
                                                    <div>
                                                        <a href="https://www.instagram.com/explore/tags/aimyon/">#Aimyon</a>
                                                    </div>
                                                </div>
                                                <div className="mainTextUserReply">
                                                    {this.state.replies.map((reply, index) => (<Reply key={index} userId={this.state.userId} newReply={reply} />))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mainTextUpTime">3시간 전</div>
                                    <div className="mainTextReplyContainer">
                                        <div className="replyContainer">
                                            <input className="replyArea" id="replyArea" aria-label="댓글 달기..." placeholder="댓글 달기..." autoComplete="off" autoCorrect="off" 
                                                onChange={this.textChange}
                                                onKeyPress={this.pressEnter}
                                                value={this.state.newReply}
                                            ></input>
                                            <button
                                                className={`replyBtnDiv replyBtn ${this.state.newReply ? "active" : "off"}`}
                                                disabled={this.state.newReply.length >= 1 ? false : true}
                                                onClick={this.addReply}
                                                type="submit"
                                                    >게시
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                <div className="mainRight">
                    <div className="mainRightProfileWrap">
                        <div className="mainRightProfileContent"></div>
                        <ul className="rightProfileNameWrap">
                            <li className="rightProfileNameId">539_ku</li>
                            <li className="rightProfileName">539</li>
                        </ul>
                    </div>
                    <div className="rightSuggestion">
                        <div className="suggestionHeader">
                            <div className="suggestionHeaderRight suggestionHeaderFont">회원님을 위한 추천</div>
                            <Link className="suggestionHeaderLink suggestionHeaderFont" to="/">모두 보기</Link>
                        </div>
                        <div className="suggestionMainWrap">
                            <div className="suggestionMainContainer">
                                <div className="suggestionMain">
                                    <div className="suggestionMainProfile">
                                            <Link className="suggestionMainImg" to="/">
                                                <div className="sugMainImg"></div>
                                            </Link>
                                    </div>
                                    <div className="sugName">
                                        <a href="https://www.instagram.com/aimyon36/" className="sugNameText">
                                            <div className="sugNameTextID">AIMYON</div>
                                        </a>
                                        <div className="sugNameTextH">회원님을 위한 추천</div>
                                    </div>
                                    <div className="sugNameBtn">
                                        <button className="followBtn">팔로우</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="suggestionMainWrap">
                            <div className="suggestionMainContainer">
                                <div className="suggestionMain">
                                    <div className="suggestionMainProfile">
                                            <Link className="suggestionMainImg" to="/">
                                                <div className="sugMainImg"></div>
                                            </Link>
                                    </div>
                                    <div className="sugName">
                                        <a href="https://www.instagram.com/aimyon36/" className="sugNameText">
                                            <div className="sugNameTextID">AIMYON</div>
                                        </a>
                                        <div className="sugNameTextH">회원님을 위한 추천</div>
                                    </div>
                                    <div className="sugNameBtn">
                                        <button className="followBtn">팔로우</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="suggestionMainWrap">
                            <div className="suggestionMainContainer">
                                <div className="suggestionMain">
                                    <div className="suggestionMainProfile">
                                            <Link className="suggestionMainImg" to="/">
                                                <div className="sugMainImg"></div>
                                            </Link>
                                    </div>
                                    <div className="sugName">
                                        <a href="https://www.instagram.com/aimyon36/" className="sugNameText">
                                            <div className="sugNameTextID">AIMYON</div>
                                        </a>
                                        <div className="sugNameTextH">회원님을 위한 추천</div>
                                    </div>
                                    <div className="sugNameBtn">
                                        <button className="followBtn">팔로우</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="suggestionMainWrap">
                            <div className="suggestionMainContainer">
                                <div className="suggestionMain">
                                    <div className="suggestionMainProfile">
                                            <Link className="suggestionMainImg" to="/">
                                                <div className="sugMainImg"></div>
                                            </Link>
                                    </div>
                                    <div className="sugName">
                                        <a href="https://www.instagram.com/aimyon36/" className="sugNameText">
                                            <div className="sugNameTextID">AIMYON</div>
                                        </a>
                                        <div className="sugNameTextH">회원님을 위한 추천</div>
                                    </div>
                                    <div className="sugNameBtn">
                                        <button className="followBtn">팔로우</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="suggestionMainWrap">
                            <div className="suggestionMainContainer">
                                <div className="suggestionMain">
                                    <div className="suggestionMainProfile">
                                            <Link className="suggestionMainImg" to="/">
                                                <div className="sugMainImg"></div>
                                            </Link>
                                    </div>
                                    <div className="sugName">
                                        <a href="https://www.instagram.com/aimyon36/" className="sugNameText">
                                            <div className="sugNameTextID">AIMYON</div>
                                        </a>
                                        <div className="sugNameTextH">회원님을 위한 추천</div>
                                    </div>
                                    <div className="sugNameBtn">
                                        <button className="followBtn">팔로우</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rightFooter">
                        <div className="rightNav">
                            <ul className="rightNavItem">
                                <li className="rightNavItemLi">소개</li>
                                <li className="rightNavItemLi">도움말</li>
                                <li className="rightNavItemLi">홍보 센터</li>
                                <li className="rightNavItemLi">API</li>
                                <li className="rightNavItemLi">채용 정보</li>
                                <li className="rightNavItemLi">개인정보처리방침</li>
                                <li className="rightNavItemLi">약관</li>
                                <li className="rightNavItemLi">위치</li>
                                <li className="rightNavItemLi">인기계정</li>
                                <li className="rightNavItemLi">해시태그</li>
                                <li className="rightNavItemLi">언어</li>
                            </ul>
                            <span className="rightNavItemLi">© 2020 INSTAGRAM FROM FACEBOOK</span>
                        </div>
                    </div>
                </div>
                </div>
            </main>
        );
    }
}

export default withRouter(Feeds);