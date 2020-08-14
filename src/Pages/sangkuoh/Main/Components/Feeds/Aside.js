import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Suggestion from '../Suggestion/Suggestion';

class Aside extends Component {
    render() {
        return (
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
                    <Suggestion />
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
        );
    }
}

export default Aside;