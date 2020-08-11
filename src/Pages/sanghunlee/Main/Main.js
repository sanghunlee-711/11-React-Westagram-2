import React, { Component } from 'react';
import './Story'
import './Feed'
import './Aside'
import Nav from '../../../Components/Nav/Nav'
import Story from './Story'
import Feed from './Feed';
import Aside from './Aside';
import './Main.scss'

class Main extends Component {
    render() {
        return (
        <main className ="Main">
            <Nav />
            <section className="feeds">
              <article>
              <Story />
                <Feed />
                <Feed />
                <Feed />
              </article>
              <Aside />
            </section>
        </main>

        );
    }
}

export default Main;