import React, { Component } from "react";
import { Switch,Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Layout, Breadcrumb, Alert  } from 'antd';
import HeaderHome from './components/HeaderHome'
import history from '../../services/history';
import Initial from '../Inicial'
import MenuHome from "./components/MenuHome";
class Home extends Component {
  constructor(props, context) {
    super(props, context);
    this.state={
      Sessiontoken:localStorage.getItem('userToken')
    }
  }
  static propTypes = {
    dispatch: PropTypes.func,
    token: PropTypes.string,
    pathName: PropTypes.string,
  };



  render() {
    const { Sessiontoken } =this.state;
    const {pathName}=this.props;
    const {  Content, Sider } = Layout;

    if (!Sessiontoken) {
      history.push('/login');
    }
    return (
      <div id="home">
      <HeaderHome/>
        <Route exact path={pathName} render={()=><Redirect to="/inicial"/>}/>
            <Layout style={{ padding: '24px 0', background: '#fff' }}>
                  <Sider width={200} style={{ background: '#fff' }}>
                    <MenuHome />
                  </Sider>
                  <Content style={{ padding: '0 24px', minHeight: 280}}>
                      <Switch 
                      >
                        <Route
                          path={`/inicial`}
                          render={ () => < Initial/> }
                        />
                      </Switch>
                  </Content>
            </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { token  } = state.session;

  return {
    token
  };
};
export default connect(mapStateToProps)(Home);
