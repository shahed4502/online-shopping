import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import AccountsUIWrapper from '../layouts/AccountsUIWrapper.jsx'
import { Orders } from '../../api/orders/orders.js';
import { Products } from '../../api/products/products.js';
import {cart}from './UserPage.jsx';


let totalItem = 0;
let totalPrice = 0;

export default class ShowCart extends Component {

	//items in the cart are rendered here
	renderCart() {
		for(j=0;j<cart.length;j++)
		{
			totalItem = totalItem + Number(cart[j].Count);
			totalPrice = totalPrice + Number(cart[j].Price);
		}
	    return cart.map((car) => (
	      <li key={car.Name}>
	      <div className="text">
	        Item Name: {car.Name}<br />
	        Count: {car.Count}<br />
	        Price: {car.Price}<br />
	        </div>
	      </li>
	    ));
  }

//if item is ordered then it is put into order collection here
  orderItem() {
  	let som = Orders.find({}, { sort: { orderNo: -1 } }).fetch();
  	let cnt = Orders.find().count();
  	let orderNo = 1;
  	if(Number(cnt)>0)
  	{
  		orderNo=Number(som[0].orderNo)+1;
  	}

  	//insertion into order collection is done here
  	for(j=0;j<cart.length;j++)
	{
		let orderedBy = Meteor.user().username;
		console.log("username is "+orderedBy);
		let orderedItems = cart[j].Count;
		let orderedValue = cart[j].Price;
		let orderedName = cart[j].Name;
		console.log("ordered values is "+orderedValue);
		Meteor.call('orders.insert', orderNo,orderedItems,orderedValue,orderedBy,orderedName);
		console.log("done");		
	}

	//deductin of the bought items from item quantity is done here in products collection
	for(j=0;j<cart.length;j++)
	{
		let orderedItems = Number(cart[j].Count);
		let orderedName = cart[j].Name;
		let som = Products.find({text : { $eq : orderedName}}).fetch();
		let orderedId = som[0]._id;
		console.log("it is "+orderedName+" and "+som[0].text);
		let prevQ = Number(som[0].quantity);
		let newQuantity = prevQ - orderedItems ;
		Meteor.call('products.setQuantity', orderedId,newQuantity);
		console.log("update done");		
	}

	window.alert("You have successfully placed your order.");
	window.location = ('./');
  }

  returnToPrev() {
  	window.location = ('./');
  }
	render (){
		Meteor.subscribe('orders');
		Meteor.subscribe('products');
		console.log("cart is "+cart[0].Name)
		return (
			<div className="container">
			<ul>
			{this.renderCart()}
			</ul>
			<div>
			Total Items: {totalItem}<br />
			Total Price: {totalPrice}
			</div>
			<button className="btn btn-success insert-page-button" onClick={this.orderItem.bind(this)}>Order</button>
			<button className="btn btn-success insert-page-button" onClick={this.returnToPrev.bind(this)}>Cancel</button>
			</div>

		);
	}
}