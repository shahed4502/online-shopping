import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import AccountsUIWrapper from '../layouts/AccountsUIWrapper.jsx'

export default class ProfilePage extends Component {
  render() {
    return (
      <div className="about">
      {Meteor.user() ?
      	<div>User Name: {Meteor.user().username}</div>:<div>Anonymous</div>}
      </div>
      );
  }
}