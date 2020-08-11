import React from 'react';
import LoginContent from './LoginContent'
import LoginNav from './LoginNav'
import './Login.scss';
import './LoginContent.scss'
import './LoginNav.scss'

class Login extends React.Component {
    render(){
        return (
            <div className ="Login">     
                <section className="mainContentWrapper">
                        <div className = "LoginContentwrapper">
                            <img className="MainImage" alt = "phonePicture" src="../images/sanghunlee/leftiamge.png" />
                        <LoginContent />
                        </div>
                        <LoginNav />
                </section>
            </div>
            )
    }
}

export default Login;
