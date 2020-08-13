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
  
  handleId =(e)=>{
    this.setState({id: e.target.value});
  }
  
  handlePassword=(e)=>{
    this.setState({password: e.target.value});
  }
  
  goToMain=()=>{
      fetch("http://10.58.4.79:8000/users/login", {
        method: "POST",
        body: JSON.stringify({
          email: this.state.id,
          password: this.state.password,
        })
      })
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(this.props.history.push('/geonwookimMain')
      )};
  
  render(){ 
    const buttonActive = this.state.id.includes("@") && this.state.password.length > 4 ? "buttonActive": "buttonInactive";
    const buttonDisabled = this.state.id.includes("@") && this.state.password.length > 4 ? false : true;

    return(
      <div className="Login">
      <body>
        <div className="login_container">
          <div>
            <img alt="인스타그램 텍스트 디자인 로고" src="images/sangkuoh/logo_text.png"/>
          </div>
          <div className="login_input_container">
          <input className="input_id" onChange={this.handleId} type="text" placeholder="전화번호, 사용자 이름 또는 이메일"/>
          <input className="password" onChange={this.handlePassword} type="password" placeholder="비밀번호"/>
          <button className={buttonActive} onClick={this.goToMain} disabled={buttonDisabled}>로그인</button>
          </div>
        <div className="paswordForgot"><a href="#">비밀번호를 잊으셨나요?</a></div>
        </div>
      </body>
      </div>

    );
  }
}
export default Login;