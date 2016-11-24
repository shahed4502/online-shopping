import { Meteor } from 'meteor/meteor';
import '../../api/products/products.js';
import '../../api/orders/orders.js';
import { Products } from '../../api/products/products.js';
import '../../api/products/methods.js';
import '../../api/products/server/publications.js';
import '../../api/orders/methods.js';
import '../../api/orders/server/publications.js';

Meteor.startup(() => {
  // code to run on server at startup
  if (Products.find().count() === 0) {
	  let text = 'corn';
	  let category = 'cereal';
	  let unit = '1 kg';
	  let price = 45;
	  let quantity = 200;
	  let image = 'corn.jpg';

	  Products.insert({
	      text,
	      category,
	      unit,
	      price,
	      quantity,
	      image,
	    });
	  console.log("inserted succesfully");

	  text = 'carrot';
	  category = 'vegetable';
	  unit = '1 kg';
	  price = 15;
	  quantity = 200;
	  image = 'carrot.jpg';

	  Products.insert({
	      text,
	      category,
	      unit,
	      price,
	      quantity,
	      image,
	    });
	  console.log("inserted succesfully");
	}
});