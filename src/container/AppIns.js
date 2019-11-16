import React, { Component } from 'react';
import { NavBar,Icon,Tabs } from 'antd-mobile';

const tabs2 = [
    { title: '推荐' },
    { title: '冬季'},
    { title: '宜家' },
    { title: '小清新' },
    { title: '小户型'},
    { title: '个性色彩'}
  ];
export default class AppIns extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'white'}}
                    rightContent={[
                        <Icon key="0" type="search" style={{ color:'white', marginRight: '16px' }} />,
                    ]}
                    >灵感</NavBar>
                <Tabs tabs={tabs2}
                tabBarUnderlineStyle={{border:'2px solid white'}}
                onChange={(tab, index) => { console.log('onChange', index, tab); }}
                onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    <div>
                        <img style={{width:'150px',margin:'15px'}} src={require('../images/ins1.jpg')} />
                        <img style={{width:'150px',margin:'15px'}} src={require('../images/ins2.jpg')} />
                        <img style={{width:'150px',margin:'15px'}} src={require('../images/ins3.jpg')} />
                        <img style={{width:'150px',margin:'15px'}} src={require('../images/ins4.jpg')} />
                        <img style={{width:'150px',margin:'15px'}} src={require('../images/ins4.jpg')} />
                        <img style={{width:'150px',margin:'15px'}} src={require('../images/ins4.jpg')} />
                    </div>
                </Tabs>
            </div>
        )
    }
}
