// todo rewrite component
import React, { Component } from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import { get } from 'lodash/get';

import { execute } from 'store';
import { getCurrentUser } from 'store/sagas/user';

import "styles/main.scss";
import "svg/sprite.svg";

import Main from "containers/Main";
import Auth from "containers/Auth";

const mapDispatchToProps = dispatch => bindActionCreators({},  dispatch);

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

async function isAuth() {
  let response = await execute(getCurrentUser);

  return response.status === 200;
}

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
export default class Application extends Component {

  state = {
    isUser: null
  };

  componentWillReceiveProps(props) {
    let user = props.user;

    if (user.data.id) {
      this.state.isUser != true && this.setState({isUser: true}, () => this.redirectSystem());
    } else {
      this.state.isUser != false && this.setState({isUser: false});
    }
  }

  componentWillMount() {
    return isAuth()
      .then(isUser => this.setState({isUser}))
      .catch(err => console.error(err))
  }

  render() {
    return this.state.isUser == null
      ? <div></div>
      : this.state.isUser
        ? <Main />
        : <Auth />
  }
}

