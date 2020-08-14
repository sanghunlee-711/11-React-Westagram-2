import React, { Component } from 'react';
import Nav from '../../.././Components/Nav/Nav'
import AsideSection from './AsideSection/AsideSection';
import './Main.scss';
import Feed from './Feed/Feed';

class Main extends Component {
    constructor(){
        super();
        this.state={

        }
    }

    componentDidMount(){
        fetch("/data/Data.json")
          .then((res) => res.json())
          .then((res) => this.setState({ data: res.leftSectionData}));
    }

    render() {
        const{data} = this.state;
        console.log(data)
        return (
            <div className="Main">
                <Nav/>
                <main className="total_contents">
                <div className="total_contents_container">
                <div className="Feed">
                    {data && data.map((el,idx) =>{
                        return <Feed key={idx} data={el}/>;
                    })}
                </div>
                <AsideSection/>
                </div>
                </main>
            </div>
        );
    }
}
export default Main;