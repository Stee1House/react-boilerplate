import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Helmet from 'react-helmet';

import SignIn from 'components/Auth/SignIn';
import SignUp from 'components/Auth/SignUp';
import ForgotPassword from 'components/Auth/ForgotPassword';

const mapDispatchToProps = dispatch => bindActionCreators({},  dispatch);

const mapStateToProps = state => {
  return {

  };
};

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
export default class Auth extends Component {
  render() {
    return (
      <Fragment>
        <Helmet
          title='ShipNEXT ICO'
          meta={[
            {
              'http-equiv': 'X-UA-Compatible',
              content: 'IE=edge',
            }
          ]}
        />
        <Switch>
          <Route exact path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/forgot-password' component={ForgotPassword} />
          <Redirect to='/signin'/>
        </Switch>
      </Fragment>
    )
  }
}
