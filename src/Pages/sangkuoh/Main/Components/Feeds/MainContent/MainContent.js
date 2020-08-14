import React, { Component } from 'react';
import ReplyContainer from '../ReplyLike/ReplyContainer';



class MainContent extends Component {
    constructor(props){
        super(props);
        this.state= {
            feed: [
                {id:"539_ku", content1:"내한 한번만 하자",contetn2:"", content3:"", profileImg:"https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/13768284_1670405186613346_1275285357_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=E_gctfZc58MAX93sp83&oh=45433d23d4cbd9b26c6b1fd73a584686&oe=5F49206E", mainImg:"https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/95930258_667632170636771_7091159714942122279_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=U_--h-cUGtUAX_EpY_r&oh=38cfc8aa26e10bbe19d8b72612020ce4&oe=5F3844D7"},
                {id:"aimyon36", content1:"でででーーー", contetn2:"", content3:"", profileImg:"https://i.pinimg.com/564x/7f/cf/6f/7fcf6f1e0006287fe92ec394913a8cf8.jpg", mainImg:"https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/106493471_737843740386804_6233843622389589294_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=ARTUiG94agsAX-g2D6y&oh=eec711887b5c7198317d2ba5dcc32f21&oe=5F5F1C65"},
                {id:"aimyon36", content1:"メロンパンナのメロメロパンチ", contetn2:"", content3:"", profileImg:"https://i.pinimg.com/564x/b5/80/1a/b5801aeaddbe6736cfc8bb264a826550.jpg", mainImg:"https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/103596407_688136048398024_2726680187630132243_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=e4t6Pgyb7LMAX8_LZoW&oh=040f614cf00fc1a1cccaca699538bca8&oe=5F6101ED"},
                {id:"aimyon36", content1:"わたし", contetn2:"向日葵 ¥350", content3:"", profileImg:"https://i.pinimg.com/564x/de/06/3f/de063f4b0a00462f32e6b77177658620.jpg", mainImg:"https://lastfm.freetls.fastly.net/i/u/770x0/fb1ff9b151226876f8c20eca4f3d5cbe.webp#fb1ff9b151226876f8c20eca4f3d5cbehttps://lastfm.freetls.fastly.net/i/u/770x0/fb1ff9b151226876f8c20eca4f3d5cbe.webp#fb1ff9b151226876f8c20eca4f3d5cbe", comments:[]},
            ]
        }
    }
    
    makeContent = () => {
        let data = this.state.feed;
        return data.map(({id, content1, content2, content3, profileImg, mainImg}, idx) => (
            <ReplyContainer key={idx} id={id} content1={content1} content2={content2} content3={content3} profileImg={profileImg} mainImg={mainImg} />
        )
        )
    }
    
  render() {
    return (
        <>
            {this.makeContent()}
        </>
    );
  }
}

export default MainContent;