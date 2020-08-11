import React from 'react';

class Nav extends React.Component{
    render(){
        return (
        <div>
            <nav>
                <ul>
                    <li>ABOUT</li>
                    <li>HELP</li>
                    <li>PRESS</li>
                    <li>API</li>
                    <li>JOBS</li>
                    <li>PRIVACY</li>
                    <li>TERMS</li>
                    <li>LOCATIONS</li>
                    <li>TOP ACCOUNTS</li>
                    <li>HASHTAGS</li>
                    <li>LANGUAGE</li>
                </ul>
            </nav>
            <footer>
                <span className="coptRight" >
                © 2020 INSTAGRAM FROM FACEBOOK
                </span>
            </footer>
        </div>
        )
    }
}

export default Nav;