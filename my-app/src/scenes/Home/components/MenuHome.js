import React, { Component } from 'react';
import { Menu,Icon,   } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import {  NavLink,withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MenuHome.css';
const FontAwesome = require('react-fontawesome');


 class MenuHome extends Component {

  static propTypes = {
    location: PropTypes.object.isRequired
  }

  render() {
    const {location}=this.props;
    return (  <div id='slideMenuJasper'>
                  <Menu
                    mode="inline"
                    defaultSelectedKeys={[location.pathname]}
                    selectedKeys={[location.pathname]}
                    style={{ height: '100%' }}
                  >
                    <Menu.Item className='menuItemIndex'  key="/prueba-jasper/finanzas" >
                          <Icon className="imageIcon"  type="dollar-circle" theme="filled" />
                          <NavLink to="/prueba-jasper/finanzas" className="tittle-for-selector">Finanzas</NavLink>  
                    </Menu.Item>
                    <Menu.Item  className='menuItemIndex' key="/prueba-jasper/cuentas">
                          <Icon className="imageIcon" type="credit-card" />
                          <NavLink to="/prueba-jasper/cuentas" className="tittle-for-selector">Cuentas</NavLink>  
                    </Menu.Item>
                    <Menu.Item className='menuItemIndex'  key="/prueba-jasper/rrhh">
                          <Icon className="imageIcon" type="user" />
                          <NavLink to="/prueba-jasper/rrhh" className="tittle-for-selector">RRHH</NavLink>  
                    </Menu.Item>
                    <Menu.Item className='menuItemIndex'  key="/prueba-jasper/favoritos">
                          <Icon className="imageIcon" type="star" />
                          <NavLink to="/prueba-jasper/favoritos" className="tittle-for-selector">Favoritos</NavLink>  
                    </Menu.Item>
                </Menu>  
              </div>  
    );
  }
}

export default withRouter(MenuHome);