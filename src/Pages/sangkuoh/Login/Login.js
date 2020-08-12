import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import "../../../../src/Styles/common.scss";
import "./Login.scss";


class Login extends Component {
    constructor() {
        super();
        this.state = {
            userID : "",
            userPassword: ""
        }
    }

    idChangeHandler = e => {
        this.setState({
            userID: e.target.value
        })
    }

    passwordChangeHandler = e => {
        this.setState({
            userPassword: e.target.value
        })
    }

    SignIn = () => {
        fetch("http://10.58.4.79:8000/users/sign-in", {
            method: "POST",
            body: JSON.stringify({
                email: this.state.userID,
                password: this.state.userPassword
            })
        }).then(res => res.json())
        .then(res => console.log(res))
    }


    goToMain =() => {
        this.props.history.push('/sangkuohMain');
    }

    pressEnter = e => {
        if(e.key === "Enter") {
            if(this.state.userPassword.length >= 5 && this.state.userID.includes("@") && this.state.userPassword.length >= 5){
                this.SignIn();
                this.goToMain();
            }
        }
    }
    
    render() {
        return (
            <div className="Login">
                <main>
                <article>
                    <div className="loginImgContainer">
                    <div className="loginImgInner"></div>
                    </div>
                    <div className="loginContainer">
                    <div className="loginBox loginBorder">
                        <div className="loginHeader"></div>
                        <div className="loginFormWrap">
                        <div className="loginForm">
                            <div className="loginFormInput" id="inputFormTop">
                            <input className="inputText inputId" onChange={this.idChangeHandler} type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
                            </div>
                            <div className="loginFormInput">
                            <input className="inputText inputPw" onChange={this.passwordChangeHandler} onKeyPress={this.pressEnter} type="password" placeholder="비밀번호" />
                            </div>
                            <button className={`btn ${this.state.userID.includes("@") && this.state.userPassword.length >= 5 ? "active" : "off"}`}
                                disabled={this.state.userID.includes("@") && this.state.userPassword.length >= 5 ? false : true}
                                onClick={this.goToMain}>
                                    로그인
                            </button>
                            <div className="loginBoxOr">
                            <div className="loginBoxOrLine"></div>
                            <div className="loginBoxOrText">또는</div>
                            <div className="loginBoxOrLine"></div>
                            </div>
                            <button className="loginBoxFb">
                            <span className="fbIcon"></span>
                            <span className="fbText">Facebook으로 로그인</span>
                            </button>
                            <a href="https://www.instagram.com/accounts/password/reset/" className="loginBoxPw">비밀번호를 잊으셨나요?</a>
                        </div>
                        </div>
                    </div>
                    <div className="signUp loginBorder">
                        <p>계정이 없으신가요?</p>
                        <a href="https://www.instagram.com/">가입하기</a>
                    </div>
                    <div className="appContainer">
                        <p>앱을 다운로드하세요.</p>
                        <div className="appIconWrap">
                        <div className="appApple appIcon"></div>
                        <div className="appGoogle appIcon"></div>
                        </div>
                    </div>
                    </div>
                </article>
                </main>
                <footer>
                <div className="footerWrap">
                    <nav>
                        <ul className="footerLi footerFont">
                        <li className="footerLiItem">소개</li>
                        <li className="footerLiItem">도움말</li>
                        <li className="footerLiItem">홍보센터</li>
                        <li className="footerLiItem">API</li>
                        <li className="footerLiItem">채용정보</li>
                        <li className="footerLiItem">개인정보처리방침</li>
                        <li className="footerLiItem">약관</li>
                        <li className="footerLiItem">위치</li>
                        <li className="footerLiItem">인기 계정</li>
                        <li className="footerLiItem">해시태그</li>
                        <li className="footerLiItem">언어</li>
                        </ul>
                    <span className="footerCorp footerFont">
                        © 2020 Instagram from Facebook
                    </span>
                    </nav>
                </div>
                </footer>
            </div>
        )
    }
}

export default withRouter(Login);