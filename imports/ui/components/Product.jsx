import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { Products } from '../../api/products/products.js'

export default class Product extends Component {
 
  deleteThisProduct() {
    Meteor.call('products.remove', this.props.product._id);
  }



  render() {
    return (
      <div>
        
        <div className="row">
    		  <div className="col-xs-12 col-md-3">
    		  	<div className="thumbnail">
    		  	 	<a href="#"><img className="js-image thumbnail-img"  src={""+this.props.product.image}
    		  		alt={""+this.props.product.image} /></a>
    		     </div>
    		    </div> 
    		</div>

  	    <div className="text">
  	      Product Name: {this.props.product.text}<br />
  	      Category: {this.props.product.category}<br />
  	      Unit: {this.props.product.unit}<br />
  	      Price per unit: {this.props.product.price}<br />
          <div>
          {Meteor.user() ?
            <div>
            {Meteor.user().username=="admin" ?
              <div>
              Quantity: {this.props.product.quantity}<br />
              <button className="btn btn-success insert-page-button" onClick={this.deleteThisProduct.bind(this)}>Delete</button></div> : ''
            } </div> : ''
          }</div>
        </div>
        
      </div>

    );
  }
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

