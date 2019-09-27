import React, { Component } from "react";
import { Switch,Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Layout, Breadcrumb, Alert  } from 'antd';
import HeaderHome from './components/HeaderHome'
import history from '../../services/history';

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
    const {pathName}=this.props
    if (!Sessiontoken) {
      history.push('/login');
    }
    return (
      <div id="home">
      <HeaderHome/>
        <Route exact path={pathName} render={()=><Redirect to="/alumnos"/>}/>
            <Breadcrumb separator=">">
                <Breadcrumb.Item   >
                  <span className='homeLink'  onClick={() => history.push('/')}>Inicio</span>
                </Breadcrumb.Item>
              <Breadcrumb.Item>Obtener Reporte</Breadcrumb.Item>
            </Breadcrumb>
            {/* <Layout style={{ padding: '24px 0', background: '#fff' }}>
                  <Sider width={200} style={{ background: '#fff' }}>
                    <MenuReport />
                  </Sider>
                  <Content style={{ padding: '0 24px', minHeight: 280 }}>
                      <Switch 
                      >
                        <Route
                          path={`${pathName}/alumnos`}
                          render={ () => <StudentsReport /> }
                        />
                        <Route
                          path={`${pathName}/finanzas`}
                          render={() => <FinanceReport />}
                        />
                        <Route
                          path={`${pathName}/cuentas`}
                          render={() => <StudentsReport2 />}
                        />
                        <Route
                          path={`${pathName}/rrhh`}
                          render={() => <StudentsReport2 />}
                        />
                        <Route
                          path={`${pathName}/general`}
                          render={() => <StudentsReport2 />}
                        />
                        <Route
                          path={`${pathName}/favoritos`}
                          render={() => <StudentsReport2 />}
                        />
                      </Switch>
                  </Content>
            </Layout> */}
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
