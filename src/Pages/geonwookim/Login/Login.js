import React, { Component } from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';

class Login extends Component {
 constructor(props){
    super(props);
    this.state={
      id: '',
      password: '',
      message:'',
      button: false,
    };
  }
  
  handleId=(e)=>{
    this.setState({id: e.target.value});
  }
  
  handlePassword=(e)=>{
    this.setState({password: e.target.value});
  }
  
  goToMain=()=>{
    this.props.history.push('/geonwookimMain')
  }

  render(){ 
    const isValid = this.state.id.includes("@") && this.state.password.length > 4; 

    return (
      <div className="Login">
        <body>
          <div className="login_container">
            <div>
              <img
                alt="인스타그램 텍스트 디자인 로고"
                src="images/sangkuoh/logo_text.png"
              />
            </div>
            <div className="login_input_container">
              <input
                className="input_id"
                onChange={this.handleId}
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
              <input
                className="password"
                onChange={this.handlePassword}
                type="password"
                placeholder="비밀번호"
              />
              <button
                className={isValid ? "buttonActive" : "buttonInactive"}
                onClick={this.goToMain}
                disabled={!isValid}
              >
                로그인
              </button>
            </div>
            <Link to="#">
              <div className="paswordForgot">비밀번호를 잊으셨나요?</div>
            </Link>
          </div>
        </body>
      </div>
    );
  }
}
export default Login;