import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter, Route } from "react-router-dom";

import { getStoredToken } from "../actions/session";

import Login from "./Login";
import Home from "./Home";
import "./index.css";

/**
 * TODO
 * - Test when token expiration
 */

class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    token: PropTypes.string
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getStoredToken());
  }

  render() {
    const { token } = this.props;
    if (!token) {
      return <Login />;
    }
    return (
      <div>
        <Route path={`${process.env.PUBLIC_URL}/`} component={Home} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { token } = state.session;
  return {
    token
  };
};
export default withRouter(connect(mapStateToProps)(App));
