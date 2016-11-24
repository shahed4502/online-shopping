import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import AccountsUIWrapper from '../layouts/AccountsUIWrapper.jsx'
import { Products } from '../../api/products/products.js';
import Product from '../components/Product.jsx';

class AdminPage extends Component {

//Products are rendered here
  renderProducts() {
    let filteredProducts = this.props.products;

    return filteredProducts.map((product) => (
      <Product key={product._id} product={product} />
    ));
  }

redirects(){
  FlowRouter.go('/');
}

//Used to show a certain button for admin and another if other users

  render() {
    return (
      <div className="container">
        <header>
          <h1>Welcome to Online Shopping</h1>

          <AccountsUIWrapper />
        </header>

        { this.props.currentUser ?
             '' : <div>{this.redirects()}</div>
        }

        <div className="product-list">
          {this.renderProducts()}
        </div>

      </div>
    );

  }

}

AdminPage.propTypes = {
  products: PropTypes.array.isRequired,
  currentUser: PropTypes.object,
};

 

export default createContainer(() => {
  Meteor.subscribe('products');
  return {
    products: Products.find({}, { sort: { createdAt: -1 } }).fetch(),
    currentUser: Meteor.user(),
  };
}, AdminPage);