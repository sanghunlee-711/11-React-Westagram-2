import React, { Component } from 'react';

class Live extends Component {
  constructor(props){
    super(props);
    this.state = {
      contents: [
        {id: "539_ku", img: "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/13768284_1670405186613346_1275285357_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=E_gctfZc58MAX93sp83&oh=45433d23d4cbd9b26c6b1fd73a584686&oe=5F49206E"},
        {id: "dongho_223", img: "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/46667604_2237749169793267_945848138990616576_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=EQshKzGkP7EAX-VODiE&oh=ed068ee9f221928b7808720734eee94d&oe=5F5EE499"},
        {id: "aimyon36", img: "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/70909335_2959436334101213_7651873241601933312_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=pN2oT8rnoKMAX_cKwf9&oh=789431521362db2c837d0079dad224a9&oe=5F5DDFDD"},
        {id: "wecode", img: "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/64219646_866712363683753_7365878438877462528_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=YnXEUJgdnQIAX-x9_FE&oh=8e965a7d389e3a19360e54be85c55e69&oe=5F5F5420"},
        {id: "dooreply", img: "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/81836987_538327120224054_1485057901201457152_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=V8LkIgS9KrgAX9mu3aY&oh=b5ad04823ace0c039126d9125ea99e99&oe=5F5DEFA0"},
        {id: "nike", img: "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/26155970_1584552474997482_4541081815552622592_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=coPipMNzQPMAX9tzJwz&oh=ccb4e4e8e54c92a73a0eb198dcb5976e&oe=5F6017B6"},
        {id: "kream", img: "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/95823873_163704498405368_7692388093306863616_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=-3kZ11eqhOsAX8eTDqI&oh=5bec22e3b2dfe79a4c0cc7d35d650046&oe=5F5EFAAE"}
      ]
    }
  }
  
  makeLive = () => {
    let data = this.state.contents;
    return data.map(({id, img}, idx) => 
      (  
        <li key={idx} className="LiveContentsWrap">
          <div className="LiveProfileWrap">
            <button style={{background: `url(${img}) no-repeat center / 100%`}} className="LiveProfile"></button>
          </div>
          <div className="LiveUserName">{id}</div>
        </li>
      ))
  }

  render() {
    return (
      <ul className="LiveLists">
        {this.makeLive()}
      </ul>
    )
  }
}

export default Live;