import React, { Component } from 'react';

class Aside extends Component {
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
                    <div className="sideBarSuggestionsPerson">
                      <div className="SuggestionsPersonPicture">
                        <img 
                          alt="suggestedperson"
                          src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/97136862_702839713802578_7837045271895736320_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=RKEStn8EIRIAX_DAFmT&oh=efad139222216e0b4d279e78bbfa753e&oe=5F4A15B9"
                        />
                        <div className="SuggestionsPersonName">
                          <span>garethbale11</span>
                          <span>Follows you</span>
                        </div>
                      </div>
                      <a href="main.html">Follow</a>
                    </div>
                    <div className="sideBarSuggestionsPerson">
                      <div className="SuggestionsPersonPicture">
                        <img 
                          alt="suggestedperson"
                          src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/43334783_496710107512397_2449280142212595712_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=yNLW9baUJa4AX_Lt7pn&oh=6b8d38cb5479768f4fcb990dce602ebb&oe=5F4B08ED"
                        />
                        <div className="SuggestionsPersonName">
                          <span>levis.vintage.clothing
                          </span>
                          <span>Friend on Facebook</span>
                        </div>
                      </div>
                      <a href="main.html">Follow</a>
                    </div>
                    <div className="sideBarSuggestionsPerson">
                      <div className="SuggestionsPersonPicture">
                        <img 
                          alt="suggestedperson"
                          src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/18879507_232995350534564_1812863153990533120_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=NVFCha_BR3wAX_IDVVs&oh=575c14dc0d452bfd7aab5c20a3d7890b&oe=5F4AA3D4"
                        />
                        <div className="SuggestionsPersonName">
                          <span>randomwalkshop</span>
                          <span>New to Instagram</span>
                        </div>
                      </div>
                      <a href="main.html">Follow</a>
                    </div>
                    <div className="sideBarSuggestionsPerson">
                      <div className="SuggestionsPersonPicture">
                        <img 
                          alt="suggestedperson"
                          src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/64219646_866712363683753_7365878438877462528_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=1QhcpY8coE4AX-VYkSs&oh=3b4dc8cc60aee32beb0cc8e74566cc05&oe=5F4B70F0"
                        />
                        <div className="SuggestionsPersonName">
                          <span>wecode_bootcamp</span>
                          <span>Followed by randomwalkshop + 6 more</span>
                        </div>
                      </div>
                      <a href="main.html">Follow</a>
                    </div>
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