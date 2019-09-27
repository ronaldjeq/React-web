import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

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
  };



  render() {
    const { Sessiontoken } =this.state;
    if (!Sessiontoken) {
      history.push('/login');
    }
    return (
      <div id="home">
        <span>holi</span>
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
