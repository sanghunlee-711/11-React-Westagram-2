import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Aside extends Component {
  constructor(){
    super()

    this.state = {
      sideBarData : []
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/data/data.json")
    .then(res => res.json())
    .then(res => this.setState({sideBarData : res.sideBarData}))
  }

    render() {
        return (
              <aside className="Aside">
                <div className="sideBarWrapper">
                  <div className="sideBarMylogo">
                    <img 
                      alt="MyLogo" 
                      src="../images/sanghunlee/howl.jpg"
                    />
                    <a href="https://google.com">hun__hoon</a>
                  </div>
                  <div className="sideBarSuggestions">
                    <p>Suggestions For You</p>
                    <a href="https://google.com">See All</a>
                  </div>
                  <div className="sideBarSuggestionsPeople">
                    {this.state.sideBarData.map(({name, alt, src, address}) => 
                      <div className="sideBarSuggestionsPerson">
                          <div className="SuggestionsPersonPicture">
                            <img 
                              alt={alt}
                              src={src}
                            />
                            <div className="SuggestionsPersonName">
                              <span>{name}</span>
                              <span>Follows you</span>
                            </div>
                          </div>
                          <Link to = {address}>Follow</Link>
                        </div>
                        )}
                    </div>
                  <div className="sideBarBottom">
                    <ul>
                      <li>About</li>
                      <li>Help</li>
                      <li>Press</li>
                      <li>API</li>
                      <li>Jobs</li>
                      <li>Privacy</li>
                      <li>Terms</li>
                      <li>Locations</li>
                      <li>Top Accounts</li>
                      <li>Hashtags</li>
                      <li>Language</li>
                    </ul>
                    <span>© 2020 INSTAGRAM FROM FACEBOOK
                    </span>
                  </div>
                </div>
              </aside>
        );
    }
}

export default Aside;