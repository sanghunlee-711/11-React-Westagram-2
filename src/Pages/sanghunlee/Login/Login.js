import React from 'react';
import LoginContent from './LoginContent'
import Nav from './Nav'

import './Login.scss';





class Login extends React.Component {
    render(){
        return (
        <div className ="LoginsassWrapper">     
            <div className="mainContentWrapper">
                    <section>
                        <img alt = ""className="MainImage" src="../images/sanghunlee/leftiamge.png" />
                    <LoginContent />
                    </section>
                    <Nav />
            </div>
        </div>
        )
    }
}

export default Login;
