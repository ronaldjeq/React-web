
import React from 'react';

import { Row, Col,Button, Icon } from 'antd';
import './HeaderHome.css'
const BlueMenu = ({ handleLogout }) => (
    <div id="headerHome">

        <Row className='headerRow'  align="middle" type="flex">
            <Col push={2} span={8}>
                <img className='imageHeader' src="/logo-comercio.png"  />    
            </Col>
            <Col span={4} push={12}>
                <Button  shape="circle" >
                    <Icon type="logout" />
                </Button>
            </Col>
        </Row>
    </div>
);

export default BlueMenu;
