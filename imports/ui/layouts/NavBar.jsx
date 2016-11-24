import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import AccountsUIWrapper from './AccountsUIWrapper.jsx'

export default class NavBar extends Component {

	render(){
		return(
			<nav className="navbar navbar-default navbar-static-top">
		      <div className="container">
		        <div className="navbar-header">
		          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
		            <span className="sr-only">Toggle navigation</span>
		            <span className="icon-bar"></span>
		            <span className="icon-bar"></span>
		            <span className="icon-bar"></span>
		          </button>
		          <a className="navbar-brand" href="#">Online Shopping</a>
		        </div>
		        <div id="navbar" className="navbar-collapse collapse">
		          <ul className="nav navbar-nav">
		            <li><a href="/">Home</a></li>
		            <li><a href="/AboutPage">About</a></li>
		            <li><a href="/ContactPage">Contact</a></li>
		            <li className="dropdown">
		              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Category <span className="caret"></span></a>
		              <ul className="dropdown-menu">
		                <li><a href="#">Action</a></li>
		                <li><a href="#">Another action</a></li>
		                <li><a href="#">Something else here</a></li>
		                <li role="separator" className="divider"></li>
		                <li className="dropdown-header">Nav header</li>
		                <li><a href="#">Separated link</a></li>
		                <li><a href="#">One more separated link</a></li>
		              </ul>
		            </li>
		          </ul>
		          <ul className="nav navbar-nav navbar-right">
		            <li><a href="#">Browse</a></li>
		            <li><a href="/ProfilePage">View Profile <span className="sr-only">(current)</span></a></li>
		            <li><a href="/ViewOrdersUser">View Previous Orders</a></li>
		          </ul>
		        </div>
		      </div>
		    </nav>
		);
	}

}