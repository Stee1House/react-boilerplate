import React, { PureComponent, Component, Fragment } from "react"
import { Route, Switch, Redirect, Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { FormattedMessage } from 'react-intl';

import NotificationSystem from 'react-notification-system';
import Helmet from 'react-helmet';

import { addNotification, deleteNotification } from 'actions/notifications';

import Main from 'components/Main';

const mapDispatchToProps = dispatch => bindActionCreators({
    addNotification,
    deleteNotification,
  },
  dispatch,
);

const mapStateToProps = state => {
  return {
    notifications: state.notifications,
  };
};

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
export default class Main extends Component {

  componentDidMount() {
    this._notificationSystem = this.refs.notificationSystem;
  }

  componentWillReceiveProps(nextProps) {
    nextProps.notifications.forEach((notification) => {
      this._notificationSystem.addNotification({
        ...notification,
        onAdd: () => {
          return this.props.deleteNotification(notification);
        },
      });
    });
  }

  render() {

    return (
      <Fragment>
        <NotificationSystem ref='notificationSystem' />
        <Helmet
          title="ShipNEXT ICO"
          meta={[
            {
              'http-equiv': 'X-UA-Compatible',
              content: 'IE=edge',
            }
          ]}
        />
        <Switch>
          <Route exact path='/' component={Main} />

          <Redirect to="/"/>
        </Switch>
      </Fragment>
    )
  }
}
