import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Nav from '../../../Components/Nav/Nav';
import Feeds from './Components/Feeds/Feeds';
import '../../../Styles/common.scss';


class Main extends Component {
    render() {
        return (
        <>
            <Nav />
            <Feeds />
        </>
        );
    }
}

export default withRouter(Main);