import React from 'react';
import LoginContent from './Components/LoginContent'
import LoginNav from './Components/LoginNav'
import './Login.scss';
import './Components/LoginContent.scss'
import './Components/LoginNav.scss'

class Login extends React.Component {
    render(){
        return (
                <div className="Login">
                        <section className = "LoginContentwrapper">
                            <img className="MainImage" alt = "phonePicture" src="../images/sanghunlee/leftiamge.png" />
                        <LoginContent />
                        </section>
                        <LoginNav />
                </div>
            )
    }
}

export default Login;
