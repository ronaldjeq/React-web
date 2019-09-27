import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import {  getStoredToken } from "../../actions/session";
import PropTypes from "prop-types";

import history from '../../services/history';

class Home extends Component {
  constructor(props, context) {
    super(props, context);
   this.props.dispatch(getStoredToken())
  }
  static propTypes = {
    dispatch: PropTypes.func,
    token: PropTypes.string,
  };
componentDidMount(){
}
  render() {
    const {token} =this.props;
    if (!this.props.token) {
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
