import React, { Component } from 'react';
// import './App.css';
import './public/App.scss';

import { Menu, Icon } from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';


class App extends Component {
  constructor(){
    super();
    this.state={
      menu:[
        {
          text:'首页',
          path:'/home',
          name:'Home',
          icon:'home'
        },{
          text:'商城',
          path:'/shop',
          name:'Shop',
          icon:'shopping'
        },{
          text:'海外服务',
          path:'/server',
          name:'Server',
          icon:'dribbble-square'
        },{
          text:'到店',
          path:'/store',
          name:'Store',
          icon:'security-scan'
        },{
          text:'我的',
          path:'/person',
          name:'Person',
          icon:'user'
        }
      ],
      current:'/home'
    }
    this.handleclick=this.handleclick.bind(this);
  }
  handleclick({ item, key, keyPath }){
    this.setState({
      current:key
    })
  }
  render() {
    return (
      <div className="App">
        {/* <Menu
        mode="horizontal"
        onClick={this.handleclick}
        >
          {
            this.state.menu.map(item=>{
              return (
                <MenuItem key={item.path}>
                  <Icon type={item.icon} />{item.text}
                </MenuItem>
              )
            })
          }
        </Menu> */}
        
      </div>
    );
  }
}

export default App;
