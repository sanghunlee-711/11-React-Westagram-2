import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Suggestion extends Component {
  constructor(props){
    super(props);
    this.state = {
      contents: [
        {id:"aimyon36", img:"https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/s150x150/77321483_196265794873036_5157696482051926802_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=EUZvl194hUoAX_vZFS7&oh=feffd42cf1a25bdf9d55837940dcc991&oe=5F5FC3BF"},
        {id:"i0v03j", img:"https://ca.slack-edge.com/TH0U6FBTN-U013L1VKC1W-98ff0bf82bba-512"},
        {id:"lovee.jane", img:"https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/102962618_271563484056071_7456491049054400145_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=iRCLHZImdI0AX_TRRU1&oh=1559fcc3520773e681ea9ab2e82ad687&oe=5F5E682C"},
        {id:"nike_hongdae", img:"https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/13437192_1062617347141910_732554000_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=G_Q5ELk_Ak8AX-N_J2X&oh=7d532bec47b19339af9619657de44575&oe=5F5F3FB6"},
        {id:"hun_hoon", img:"https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/75231118_601525513717221_5564373819822440448_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=kpueyi_Scg4AX9pAaMz&oh=0488f293f0573d864d043e2cbbb202e0&oe=5F5D7983"}
      ]
    }
  }

  makeSug = () => {
    const { contents } = this.state
    return contents.map(({id, img}, idx) =>
    (
    <div className="suggestionMainContainer" key={idx}>
        <div className="suggestionMain">
            <div className="suggestionMainProfile">
                    <Link className="suggestionMainImg" to="/">
                        <div className="sugMainImg" style={{background: `url(${img}) no-repeat center / 100%`}}></div>
                    </Link>
            </div>
            <div className="sugName">
                <a href="https://www.instagram.com/aimyon36/" className="sugNameText">
                    <div className="sugNameTextID">{id}</div>
                </a>
                <div className="sugNameTextH">회원님을 위한 추천</div>
            </div>
            <div className="sugNameBtn">
                <button className="followBtn">팔로우</button>
            </div>
        </div>
    </div>
    ))
  }
  
  render() {
    return (
      <div className="suggestionMainWrap">
        {this.makeSug()}
      </div>
    );
  }
}

export default Suggestion;