import React, { Component } from "react";
import { Row, Col } from 'antd';
import "./index.css";
import LoginForm from './components/LoginForm'


class Login extends Component {



  render() {

    return (
            <Row id="loginWrapper" type="flex" justify="center" align="middle" >
                <Col xs={2} md={6}/>
                <Col xs={20}  md={12} >
                    <Row type="flex"style={{backgroundColor:'#f7c600'}}>
                        <Col   span={8} justify="center" >
                            <Row type="flex" justify="center"style={{height:'170px',   overflow: 'auto'}}>
                                <Col span={24}  >
                                    <img className='imageLogin' src="/comercio_logo.png"  />    
                                </Col>
                            </Row>
                        </Col>
                        <Col   span={16}  >
                            <LoginForm/>
                        </Col>
                    </Row>
                </Col>
                <Col xs={2} md={6}/>
            </Row>

    );
  }
}


export default Login;
