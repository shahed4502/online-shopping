import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import AccountsUIWrapper from '../layouts/AccountsUIWrapper.jsx'
import { Products } from '../../api/products/products.js';
import Product from '../components/Product.jsx';
// App component - represents the whole app
class InsertPage extends Component {

//Data is inserted using this function
  handleSubmit(event) {
    event.preventDefault();
    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.productInput).value.trim();
    const category = ReactDOM.findDOMNode(this.refs.categoryInput).value.trim();
    const price = ReactDOM.findDOMNode(this.refs.priceInput).value.trim();
    const quantity = ReactDOM.findDOMNode(this.refs.quantityInput).value.trim();
    const unit = ReactDOM.findDOMNode(this.refs.unitInput).value.trim();
    const image = ReactDOM.findDOMNode(this.refs.imageInput).value.trim();
    Meteor.call('products.insert', text,category,unit,price,quantity,image);
    window.alert("Product successfully inserted.");
     // Clear form
    ReactDOM.findDOMNode(this.refs.productInput).value = '';
    ReactDOM.findDOMNode(this.refs.categoryInput).value = '';
    ReactDOM.findDOMNode(this.refs.unitInput).value = '';
    ReactDOM.findDOMNode(this.refs.priceInput).value = '';
    ReactDOM.findDOMNode(this.refs.quantityInput).value = '';
    ReactDOM.findDOMNode(this.refs.imageInput).value = '';
    //return to homepage
    FlowRouter.go('/');
  }

  redirects() {
     FlowRouter.go('/');
  }

//used to show the insertion fields only if username is admin
  returnInsert() {

    return (
      <div>
            { this.props.currentUser.username=="admin" ?
            <form className="new-product">
            
                <label>Product Name:</label>
                <input
                  type="text"
                  ref="productInput"
                  placeholder="Type to add new products"
                /><br /> 
                <label>Category:</label>
                <input
                  type="text"
                  ref="categoryInput"
                  placeholder="Type to add product category"
                />
              <br />
                <label>Unit:</label>
                <input
                  type="text"
                  ref="unitInput"
                  placeholder="Type to add product unit"
                />
              <br />
                <label>Price per unit:</label>
                <input
                  type="text"
                  ref="priceInput"
                  placeholder="Type to add product price"
                />
              <br />
                <label>Quantity:</label>
                <input
                  type="text"
                  ref="quantityInput"
                  placeholder="Type to add product quantity"
                />
              <br />
              <label>Image URL:</label>
              <input
                type="text"
                ref="imageInput"
                placeholder="Type the url of the product image"
              />
              <br />
              <button className="btn btn-success" onClick={this.handleSubmit.bind(this)}>save</button>
              
            </form> : <div>{this.redirects()}</div>
          }
          </div>
    )
  }
 

  render() {
    return (
      <div className="container">
        <header>
          <h1>Insert Products</h1>

          <AccountsUIWrapper />
        </header>

        { this.props.currentUser ?
             this.returnInsert() 
             : 
             <div>{this.redirects()}</div>
        }

      </div>
    );

  }

}

InsertPage.propTypes = {
  products: PropTypes.array.isRequired,
  currentUser: PropTypes.object,
};

 

export default createContainer(() => {
  Meteor.subscribe('products');
  return {
    products: Products.find({}, { sort: { createdAt: -1 } }).fetch(),
    currentUser: Meteor.user(),
  };
}, InsertPage);