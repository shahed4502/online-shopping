import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';

export default class ContactPage extends Component {
  render() {
    return (
      <div className="about">
      This the contact page of our site. Here contact details about our site<br/>
      will be provided.
      </div>
      );
  }
}