import React, { Component } from 'react';
import Nav from '../../../Components/Nav/Nav'
import Story from './Components/Story'
import Feeds from './Components/Feeds';
import Aside from './Components/Aside';
import './Main.scss'
import './Components/Feed.scss'
import './Components/Reply.scss'
import './Components/Story.scss'
import './Components/Aside.scss'

class Main extends Component {


    render() {
        return (
        <main className ="Main">
            <Nav />
            <section className="feeds">
              <article>
              <Story />
                <Feeds />
              </article>
              <Aside />
            </section>
        </main>
        );
    }
}

export default Main;