import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import Aside from './Aside';
import Live from './Live/Live';
import MainContent from './MainContent/MainContent';
import "./Feeds.scss";

class Feeds extends Component {
    render() {
        return (
            <main className="Feeds">
                <div className="mainContainer">
                    <div className="feeds">
                        <div className="feedsContent">
                            <div className="feedsContentLive">
                                <Live />
                            </div>
                        </div>
                        <article>
                            <MainContent />
                        </article>
                    </div>
                    <Aside />
                </div>
            </main>
        );
    }
}

export default withRouter(Feeds);