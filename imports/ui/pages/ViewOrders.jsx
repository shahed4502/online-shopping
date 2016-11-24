import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import AccountsUIWrapper from '../layouts/AccountsUIWrapper.jsx'
import { Orders } from '../../api/orders/orders.js';

let oNo = 0;
class ViewOrders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSpecific: true,
    };
  }

  setSpecific(orderNo) {
  	//when we need to see details of a sepecif order, showspecific is false
  	console.log("in setspecific orderNo "+orderNo);
  	oNo = Number(orderNo);
  	this.setState({
  		showSpecific: false,
  	});
  }

  resetSpecific(orderNo) { 
  	//when we enter the page and see all the orders, showspecific is true
  	this.setState({
  		showSpecific: true,
  	});
  }

  renderOrders() {

  	let orders = [];
  	for(j=0; j<this.props.orders.length; j++)
  	{
  		let fl = 1;
  		for(k=0; k<orders.length; k++)
  		{
  			if(this.props.orders[j].orderNo == orders[k].orderNo)
  			{
  				fl = 0;
  				break;
  			}
  		}
  		if(fl==1){
  			orders.push(this.props.orders[j]);
  		}
  	}

  	//we show the list of orders when showspecic is true
  	if(this.state.showSpecific){
  		return orders.map((order) => (
	      <li key={order._id}>

	      <div className="text">
	        Order No: {order.orderNo}<br />
	      </div>
	      <button onClick={this.setSpecific.bind(this, order.orderNo)}>View Details</button>
	      </li>
	    ));
  	}
  	else {
  		//we show details of a specific order when showspecif is not true
  		let orders = [];
  		console.log("order length "+this.props.orders.length+" order no "+oNo);
  		for(j=0; j<this.props.orders.length; j++)
	  	{
	  		if(this.props.orders[j].orderNo==oNo){
	  			orders.push(this.props.orders[j]);
	  		}
	  	}
	  	return orders.map((order) => (
	      <li key={order._id}>

	      <div className="text">
	        Item Name: {order.orderedName}<br />
	        Item count: {order.orderedItems}<br />
	        Price : {order.orderedValue}<br />
	      </div>
	      </li>
	    ));
  	}

  }

//order no and username is shown here above the item list
  renderNoAndUser(){
  	if(!this.state.showSpecific)
  	{
  		let orders = [];
  		console.log("order length "+this.props.orders.length+" order no "+oNo);
  		for(j=0; j<this.props.orders.length; j++)
	  	{
	  		if(this.props.orders[j].orderNo==oNo){
	  			orders.push(this.props.orders[j]);
	  			break;
	  		}
	  	}
	  	let orderNo = orders[0].orderNo;
	  	let orderedBy = orders[0].orderedBy;
	  	return(<div className="text">
	        Order No: {orderNo}<br />
	        Ordered By: {orderedBy}<br />
	      </div>);
  	}
  	else return ''
  }

  redirects() {
     window.location="/ViewOrders";
  }

  render() {
    return (
     <div className="container">
        <header>
          <h1>Welcome to Online Shopping</h1>

          <AccountsUIWrapper />
        </header>

        { this.props.currentUser ?
         <div className="product-list">
         {this.renderNoAndUser()}
          <ul>
          {this.renderOrders()}
          </ul>
          <button onClick={this.resetSpecific.bind(this)}>Back</button>
        </div>
        : 
        ''
        }

    </div>
    )
  }

}

ViewOrders.propTypes = {
  orders: PropTypes.array.isRequired,
  currentUser: PropTypes.object,
};

 

export default createContainer(() => {
	Meteor.subscribe('orders');
  return {
    orders: Orders.find({}, { sort: { orderNo: +1 } }).fetch(),
    currentUser: Meteor.user(),
  };
}, ViewOrders);