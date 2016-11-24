import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import AccountsUIWrapper from '../layouts/AccountsUIWrapper.jsx'
import { Products } from '../../api/products/products.js';

export let cart=[];
class UserPage extends Component {

//items are added into the cart array
  addToCart(text, price)
  {
    let count = 1;
    let item = {Name:text, Count:count, Price:price};
    let fl=1;
    for (i = 0; i < cart.length; i++) {
      if(cart[i].Name === text)
      {
        cart[i].Count=cart[i].Count+1;
        cart[i].Price=Number(cart[i].Price)+Number(price);
        fl=0;
        break;

      }
    }
    if(fl==1){
      cart.push(item);
    }
    // for(i=0; i<cart.length; i++){
    //   console.log("item: "+i+" is "+cart[i].Name+" count "+cart[i].Count+" price "+cart[i].Price); 
    // }
    window.alert('Added to cart.');
    this.render();
  }

  //products are shown here
  renderProducts() {
    let filteredProducts = this.props.products;

    return filteredProducts.map((product) => (
      <li key={product._id}>
      <div className="row">
          <div className="col-xs-12 col-md-3">
            <div className="thumbnail">
              <a href="#"><img className="js-image thumbnail-img"  src={""+product.image}
              alt={""+product.image} /></a>
             </div>
            </div> 
        </div>

      <div className="text">
        Product Name: {product.text}<br />
        Category: {product.category}<br />
        Unit: {product.unit}<br />
        Price per unit: {product.price}<br />
        </div>
        <button id="add-to-cart"onClick={this.addToCart.bind(this, product.text, product.price)}>Add to Cart</button>
      </li>
    ));
  }

  redirects() {
     FlowRouter.go('/');
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
          <ul>
          {this.renderProducts()}
          </ul>
          <a href="/ShowCart"><button className="btn btn-success insert-page-button">View Cart</button></a>
        </div>
        : 
        <div>{this.redirects()}</div>
        }

      </div>
    )
  }

}

UserPage.propTypes = {
  products: PropTypes.array.isRequired,
  Cart: PropTypes.array.isRequired,
  currentUser: PropTypes.object,
};

 

export default createContainer(() => {
  Meteor.subscribe('products');
  return {
    products: Products.find({}, { sort: { createdAt: -1 } }).fetch(),
    Cart: cart,
    currentUser: Meteor.user(),
  };
}, UserPage);