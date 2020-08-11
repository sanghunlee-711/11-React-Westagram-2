import React, { Component } from 'react';
import Nav from '../../.././Components/Nav/Nav'
import AsideSection from './AsideSection/AsideSection';
import LeftSection from './LeftSection/LeftSection';
import './Main.scss';

class Main extends Component {
    render() {
        return (
            <div className="Main">
                <Nav/>
                <main class="total_contents">
                <div class="total_contents_container">
                <LeftSection/>
                <AsideSection/>
                </div>
                </main>
            </div>
        );
    }
}

export default Main;