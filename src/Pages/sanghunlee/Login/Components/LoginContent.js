import React from'react';
import {withRouter, Link} from 'react-router-dom';

class LoginContent extends React.Component{
    constructor(props){
        super(props)

        this.state ={
            id: '',
            pw: '',
            button: 'button',
            disabled: true,
            token: ''
        }
    }

    LoginButton =()=>{

        fetch("http://10.58.0.127:8000/user/login", {
            method: "POST",
            body: JSON.stringify({
                email : this.state.id,
                password : this.state.pw
            })
        })
        .then(res => res.json()) 
        .then(res => console.log(res))
    };

    updateId =(e)=>{
        const isIdValid = this.state.id.length >=5 && this.state.pw.length >=5 && this.state.id.includes("@")
        ;
        this.setState({
            id: e.target.value,
            disabled: !isIdValid
        })

    }
    
    updatePw =(e)=>{
        const isPwValid = this.state.id.length >=5 && this.state.pw.length >=5 && this.state.id.includes("@")
        ;
        this.setState({
            pw: e.target.value,
            disabled: !isPwValid
        })

    }

    render(){

        return(
        <div className ="LoginContent">
                <div className="loginInputBox">
                    <img 
                        className="instaLogo" 
                        alt ='logoImage' 
                        src="../images/sanghunlee/logo_text.png" 
                    />
                    <input
                        value ={this.state.id} 
                        type="text" 
                        placeholder="Phone number, username, or email"
                        onChange ={this.updateId} 
                    />
                    <input 
                        value = {this.state.pw}
                        type="text" 
                        placeholder="Password"
                        onChange ={this.updatePw} 
                    />
                    <button 
                        className="loginBtn"
                        onClick = {this.LoginButton} 
                        disabled={this.state.disabled}
                    >
                        Log In
                    </button>
                    <div className="or">
                        <div className="slashLine"></div>
                        <span>OR</span>
                        <div className="slashLine"></div>
                    </div>
                    <div className="withFacebook">
                        <div>
                            <img alt ='facebookLogo' src="../images/sanghunlee/fblogo.png"/>
                            <span>
                                Log in with Face book
                            </span>
                        </div>
                        <a href="https://facebook.com">Forgot password?</a>
                    </div>
                </div>
            <div className="SignUpBox">
                <span>Don't have an account?
                </span>
                <a href="https://facebook.com">Sign Up</a>
            </div>
            <div className="getApp">
                <div>Get the app</div>
                <div className="appLogo">
                    <img 
                        alt = 'appleStoreLogo' 
                        src="../images/sanghunlee/applelogo.png"
                    />
                    <img 
                        alt = 'GoogleStoreLogo' 
                        src="../images/sanghunlee/googlelogo.png"
                    />
                </div>
            </div>
        </div>
        );
    }
}

export default withRouter(LoginContent);