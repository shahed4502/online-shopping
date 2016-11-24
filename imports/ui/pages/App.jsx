import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import AccountsUIWrapper from '../layouts/AccountsUIWrapper.jsx'
import { Products } from '../../api/products/products.js';
import Product from '../components/Product.jsx';

class App extends Component {

//Products are rendered here
  renderProducts() {
    let filteredProducts = this.props.products;

    return filteredProducts.map((product) => (
      <Product key={product._id} product={product} />
    ));
  }

redirectToAdminPage(){
  FlowRouter.go('/AdminPage');
}

redirectTOUserPage(){
  FlowRouter.go('/UserPage');
}

//Used to show a certain button for admin and another if other users
  returnInsert() {

    return (
      <div>
        { this.props.currentUser.username=="admin" ?
         <div>{this.redirectToAdminPage()}</div>
         : <div>{this.redirectTOUserPage()}</div>
      }
      </div>
    )
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Welcome to Online Shopping</h1>

          <AccountsUIWrapper />
        </header>

        { this.props.currentUser ?
             this.returnInsert() : ''
        }

        <div className="product-list">
          {this.renderProducts()}
        </div>

      </div>
    );

  }

}

App.propTypes = {
  products: PropTypes.array.isRequired,
  currentUser: PropTypes.object,
};

 

export default createContainer(() => {
  Meteor.subscribe('products');
  return {
    products: Products.find({}, { sort: { createdAt: -1 } }).fetch(),
    currentUser: Meteor.user(),
  };
}, App);