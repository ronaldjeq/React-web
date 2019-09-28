import { Form, Icon, Input, Button } from 'antd';
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loginRequest } from "../../../actions/session";

import './LoginForm.css'
class NormalLoginForm extends Component {
    static propTypes = {
        dispatch: PropTypes.func,
        token: PropTypes.string
      };
      
      
  handleSubmit = e => {
    const { dispatch } = this.props;
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
         const {username, password}=values
        dispatch(loginRequest(username, password));
      }
    });
  };
  register= ()=> {
    console.log('register')
  }
  unknown= ()=> {
    console.log('anonimo')
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form id='LoginForm' onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button  htmlType="submit" className="login-form-button">
            Log in
          </Button>
          <Button  onclick={()=>this.register()} className="login-form-button">
            registrar
          </Button>
          <Button  onclick={()=>this.unknown()}className="login-form-button">
            Denuncia anónima
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
const mapStateToProps = state => {
    const { token } = state.session;
    return {
      token
    };
  };
export default  Form.create({ name: 'normal_login' }) (connect(mapStateToProps)(NormalLoginForm));

