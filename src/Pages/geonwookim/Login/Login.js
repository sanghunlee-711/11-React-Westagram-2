import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
 constructor(props){
    super(props);
    this.state={
      id: '',
      password: '',
      message:'',
      button: 'disabled',
    };
  }

  goToMain=()=>{
    this.props.history.push('/geonwookimMain');
  }

  handleId =(e)=>{
    this.setState({id: e.target.value});
    console.log(e.target.value);
  }

  handlePassword=(e)=>{
    this.setState({password: e.target.value});
    console.log(e.target.value);
  }

  
  render(){
    

    return(
      <div>
      <body>
        <div className="login_container">
          <div>
            <img alt="인스타그램 텍스트 디자인 로고" src="images/sangkuoh/logo_text.png"/>
          </div>
          <div className="login_input_container">
          <input className="input_id" onChange={this.handleId} type="text" placeholder="전화번호, 사용자 이름 또는 이메일"/>
          <input className="password" onChange={this.handlePassword} type="password" placeholder="비밀번호"/>
          <button className={this.state.id.includes("@") && this.state.password.length > 4 ? "buttonActive": "buttonInactive"} onClick={this.goToMain}
                  disabled={this.state.id.includes("@") && this.state.password.length > 4 ? false : true}>로그인</button>
        </div>
        <div className="paswordForgot"><a href="#">비밀번호를 잊으셨나요?</a></div>
        </div>
      </body>
      </div>

    );
  }
}

export default Login;