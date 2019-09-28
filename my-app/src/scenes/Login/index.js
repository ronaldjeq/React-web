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
                    <Row align="middle" type="flex" className='LoginRow' style={{backgroundColor:'#f7c600'}}>
                        <Col   span={8}  >
                            <img className='imageLogin' src="/comercio_logo.png"  />    
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
