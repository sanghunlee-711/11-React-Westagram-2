import React, { Component } from 'react';
import Nav from '../../.././Components/Nav/Nav'
import LeftSection from './LeftSection/LeftSection';
import AsideSection from './AsideSection/AsideSection';
import './Main.scss';

class Main extends Component {
    render() {
        return (
            <div className="Main">
                <Nav/>
                <main className="total_contents">
                <div className="total_contents_container">
                <LeftSection/>
                <AsideSection/>
                </div>
                </main>
            </div>
        );
    }
}
export default Main;