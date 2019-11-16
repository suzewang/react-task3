import React from 'react'
import { TabBar } from 'antd-mobile';
import AppHome from './AppHome';
import AppIns from './AppIns';
import AppShop from './AppShop';

export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
    };
  }
  render() {
    return (
        <div style={{ 
            position: 'fixed', 
            height: '100%', 
            width: '100%', 
            top: 0 
        }}>
            <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            >
            <TabBar.Item
                title="首页"
                key="Life"
                icon={<div style={{
                width: '22px',
                height: '22px',
                background: 'url(http://sc.adminbuy.cn/uploads/allimg/170119/1-1F1191346330-L.png) center center /  21px 21px no-repeat' }}
                />
                }
                selectedIcon={<div style={{
                width: '22px',
                height: '22px',
                background: 'url(http://sc.adminbuy.cn/uploads/151023/1-151023215433204.png) center center /  21px 21px no-repeat' }}
                />
                }
                selected={this.state.selectedTab === 'blueTab'}
                onPress={() => {
                    this.setState({
                        selectedTab: 'blueTab',
                    });
                }}
            >
            <AppHome />
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://www.easyicon.net/api/resizeApi.php?id=1237582&size=128) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://preview.qiantucdn.com/58pic/27/61/86/88c58PICCi2fBcbyezfcT_PIC2018.png!w1024_new_0) center center /  21px 21px no-repeat' }}
              />
            }
            title="灵感"
            key="Koubei"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
          >
            <AppIns />
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(http://sc.adminbuy.cn/uploads/allimg/160421/1-1604211624180-L.png) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(http://sc.adminbuy.cn/uploads/allimg/160421/1-1604211624000-L.png) center center /  21px 21px no-repeat' }}
              />
            }
            title="商城"
            key="Friend"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            <AppShop />
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: 'http://sc.adminbuy.cn/uploads/allimg/160421/1-1604211605260-L.png' }}
            selectedIcon={{ uri: 'http://sc.adminbuy.cn/uploads/allimg/160421/1-1604211609140-L.png' }}
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            我的
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}