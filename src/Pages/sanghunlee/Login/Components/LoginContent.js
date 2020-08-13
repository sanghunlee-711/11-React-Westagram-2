import React from'react';
import {withRouter, Link} from 'react-router-dom';

class LoginContent extends React.Component{
    constructor(props){
        super(props)

        this.state ={
            username: '',
            password: '',
            button: 'button',
            disabled: true,
            token: ''
        }
    }

    LoginButton =()=>{
        fetch("http://10.58.0.127:8000/user/login", {
            method: "POST",
            body: JSON.stringify({
                email : this.state.username,
                password : this.state.password
            })
        })
        .then(res => res.json()) 
        .then(res => this.setState({token: res}))

        
        this.props.history.push("/sanghunleeMain")
    };
    
    updateInput =({target: {name, value}})=>{
        const isValid = this.state.username.length >=5 && this.state.password.length >=5 && this.state.username.includes("@");
        this.setState({
            [name]: value,
            disabled: !isValid
        })

    }
    render(){
        const {LoginButton, updateInput, state: {username : usernameInput, password: passwordInput, disabled}} = this;

        return(
        <div className ="LoginContent">
                <div className="loginInputBox" onChange={updateInput}>
                    <img 
                        className="instaLogo" 
                        alt ='logoImage' 
                        src="../images/sanghunlee/logo_text.png" 
                    />
                    <input
                        value ={usernameInput} 
                        name="username"
                        type="text" 
                        placeholder="Phone number, username, or email"
                    />
                    <input 
                        value = {passwordInput}
                        name="password"
                        type="text" 
                        placeholder="Password"
                    />
                    <button 
                        className="loginBtn"
                        onClick = {LoginButton} 
                        disabled={disabled}
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