import React, { Component } from 'react';

class Story extends Component {
  constructor(props){
    super(props)

    this.state={
        id1 : 'https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/67310557_649773548849427_4130659181743046656_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=GacGZMKmYSkAX8paGd3&oh=e63fcea941b31312d76ac7600f134f91&oe=5F4B8153'
        
      }
  }
    render() {
        return (
            <div className="storyBoard">
                <ul>
              <li>
                <div className="storyBoardCircle">
                  <img alt="storycirclepicture"
                    src={this.state.id1}/>
                </div>
                <span className="exampleId">cristiano</span>
              </li>
              <li>
                <div className="storyBoardCircle">
                  <img alt="storycirclepicture"
                    src="
                      https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/80338838_604414493436078_7469035702127165440_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=bgxJv4NQZnkAX_SANq3&oh=a3ef7958ee069fde9e640c3a829aaa77&oe=5F4BFEDA"/>
                </div>
                <span>barbour</span>
              </li>
              <li>
                <div className="storyBoardCircle">
                  <img alt="storycirclepicture"
                    src="
                      https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/28434316_190831908314778_1954023563480530944_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=7aJzIwfMF3oAX9v5H1P&oh=ce955902b7f10bc65eb6cb1ec8351b8b&oe=5F4AA460"/>
                </div>      
                <span>dlwlrma</span>
              </li>
              <li>
                <div className="storyBoardCircle">
                  <img alt =''
                    src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/64886997_457854294768762_7513079337617195008_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=AuQdC0wnZuAAX8f0gYn&oh=7251c0f730395fbe997d2254379fda11&oe=5F4CA942"/>
                </div>
                <span>giantpengsoo</span>
              </li>
              <li>
                <div className="storyBoardCircle">
                  <img alt=''
                    src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/100484103_293136678519815_487177234147180544_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=EuizK8F2nFwAX_JaKvy&oh=405eb1dedaa04a1ebfc99ea310a93b8d&oe=5F4C7FC9"/>
                </div>
                <span>ye_heumheumm</span>
              </li>
              <li>
                <div className="storyBoardCircle">
                  <img alt=''
                    src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/104335883_266378381089415_5080961817201531810_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=1VX77ISQWQIAX9wV92U&oh=44ddc604fa87d193aa08e4ebe1d56e7c&oe=5F49F5BE"/>
                </div>
                <span>yeonukhwang</span>
              </li>
              <li>
                <div className="storyBoardCircle">
                  <img alt=''
                        src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/12424444_532565470264126_1212562276_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=qDR6jXK3KpwAX8mkkUs&oh=0c4fb2cfe9f826a6005199c090e3f598&oe=5F4BDC8E"/>
                    </div>
                    <span>gitmanvintage</span>
                </li>
                <li>
                    <div className="storyBoardCircle">
                    <img alt=''
                        src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/89271910_554716358586253_4601663561918316544_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=cRR1vgpoeEIAX9mvtxe&oh=c5f0f685536ef1ba17e4953ddaf0e4dc&oe=5F4C6777"/>
                    </div>
                    <span>ariharamiyuki</span>
                </li>
                <li>
                    <div className="storyBoardCircle">
                    <img alt=''
                        src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/71531286_3085712644832024_2029702609517936640_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=2s940BDC-5kAX9yW7dk&oh=570546d111a9395e46fc59c806d093c2&oe=5F4B9521"/>
                    </div>
                    <span>nomad_coders</span>
                </li>
                </ul>
          </div>
            );
    }
}

export default Story;