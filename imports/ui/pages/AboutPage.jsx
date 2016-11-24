import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';

export default class AboutPage extends Component {
  render() {
    return (
      <div className="about">
      This the about page of our site. Here details about our site<br/>
      will be provided. It should be customizable so that the <br/>
      admin can modify it and provied detail about there own shop<br/>
      </div>
      );
  }
}