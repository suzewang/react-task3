import React, { Component } from 'react';
import { NavBar,Carousel } from 'antd-mobile';
import {Icon} from 'antd';

export default class AppShop extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'white'}}
                    rightContent={[
                        <img src={require('../images/shop.jpg')} style={{width:'25px'}}/>
                    ]}
                    >商城</NavBar>
                <div>
                    <Carousel autoplay>
                        <div><img src={require('../images/bed.jpg')} style={{width:'100%'}}/></div>
                        <div><img src={require('../images/bed.jpg')} style={{width:'100%'}}/></div>
                        <div><img src={require('../images/bed.jpg')} style={{width:'100%'}}/></div>
                        <div><img src={require('../images/bed.jpg')} style={{width:'100%'}}/></div>
                    </Carousel>
                    <div style={{width:'360px',height:'40px',marginTop:'-180px',position:'relative'}}>
                        <div style={{width:'360px',height:'40px',background:'black',opacity:0.3}}></div>
                        <div style={{marginTop:'-25px',marginLeft:'15px'}}><Icon type="unordered-list" style={{color:'white'}}/></div>
                        <div style={{marginLeft:'40px',marginTop:'-25px',position:'relative',width:'300px',borderRadius:'5px',height:'30px',border:'1px solid gray',background:'gray'}}>
                            <Icon type="search" style={{marginLeft:'10px',marginTop:'8px',position:'absolute'}} />
                            <input type="text" placeholder='输入关键字搜索' style={{marginLeft:'35px',marginTop:'3px'}} />
                        </div>
                    </div>
                    <div style={{position:'relative',marginTop:'150px',marginLeft:'25px'}}>
                        <img src={require('../images/shoptitle1.jpg')} style={{width:'50px'}} />
                        <img src={require('../images/shoptitle2.jpg')} style={{width:'50px',display:'inline-block',marginLeft:'15px'}} />
                        <img src={require('../images/shoptitle3.jpg')} style={{width:'50px',display:'inline-block',marginLeft:'15px'}} />
                        <img src={require('../images/shoptitle4.jpg')} style={{width:'50px',display:'inline-block',marginLeft:'15px'}} />
                        <img src={require('../images/shoptitle5.jpg')} style={{width:'50px',marginLeft:'15px'}} /><br/>
                        <span style={{marginLeft:'17px'}}>桌</span>
                        <span style={{marginLeft:'52px'}}>床</span>
                        <span style={{marginLeft:'52px'}}>椅</span>
                        <span style={{marginLeft:'52px'}}>几</span>
                        <span style={{marginLeft:'52px'}}>柜</span><br/>
                        <img src={require('../images/shoptitle6.jpg')} style={{width:'50px',marginTop:'10px'}} />
                        <img src={require('../images/shoptitle7.jpg')} style={{width:'50px',marginTop:'10px',marginLeft:'16px'}} />
                        <img src={require('../images/shoptitle8.jpg')} style={{width:'50px',marginTop:'10px',marginLeft:'15px'}} />
                        <img src={require('../images/shoptitle9.jpg')} style={{width:'50px',marginTop:'10px',marginLeft:'15px'}} />
                        <img src={require('../images/shoptitle10.jpg')} style={{width:'50px',marginTop:'10px',marginLeft:'15px'}} /><br/>
                        <span style={{marginLeft:'9px'}}>书架</span>
                        <span style={{marginLeft:'40px'}}>沙发</span>
                        <span style={{marginLeft:'24px'}}>家居饰品</span>
                        <span style={{marginLeft:'9px'}}>户外家具</span>
                        <span style={{marginLeft:'9px'}}>全部分类</span>
                    </div>
                    <div style={{marginLeft:'20px'}}>
                        <img src={require('../images/hotshop1.jpg')} style={{width:'150px',marginTop:'20px'}} />
                        <img src={require('../images/hotshop2.jpg')} style={{width:'150px',marginTop:'20px',marginLeft:'20px'}} /><br/>
                        <span style={{fontSize:'11px'}}>Top Art Studio 欧式风格精细...</span>
                        <span style={{fontSize:'11px',marginLeft:'25px'}}>顺顺工艺欧式风格塑料外框黑...</span>
                        <span>￥39.95</span>
                        <span style={{marginLeft:'120px'}}>￥83.99</span>
                    </div>
                </div>
            </div>
        )
    }
}
