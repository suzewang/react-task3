import React, { Component } from 'react'
import { NavBar,Carousel } from 'antd-mobile';
export default class AppHome extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'white'}}
                    >住吧家居</NavBar>
                <Carousel autoplay>    
                    <div><img src={require('../images/bed.jpg')} style={{width:'100%'}}/></div>
                    <div><img src={require('../images/bed.jpg')} style={{width:'100%'}}/></div>
                </Carousel>
                <div>
                    <img className="space" style={{width:'90px',height:'90px'}} src={require('../images/title1.jpg')} />
                    <img className="space" style={{width:'90px',height:'90px'}} src={require('../images/title2.jpg')} />
                    <img className="space" style={{width:'90px',height:'90px'}} src={require('../images/title3.jpg')} />
                </div>
                <div><div style={{width:'5px',height:'25px',background:'#3fcccb',display:'inline-block'}}></div><span className="hot">热门推荐</span></div>
                <div className="hotphoto">
                    <img style={{height:'100%',width:'360px'}} src={require('../images/hot.jpg')} />
                </div>
            </div>
        )
    }
}